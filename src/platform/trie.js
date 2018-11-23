import capitalizeEachWord from './capitalize-each-word'

export default class Trie {
  constructor(wordList) {
    this.trie = new TrieNode()

    this._build(wordList)
  }

  _build(words) {
    words.forEach(inputWord => {
      let word = inputWord.toLowerCase()
      let node = this.trie

      for (let i = 0; i < word.length; i++) {
        const char = word[i]

        if (node.doesChildExist(char)) {
          const isTerminal = i === word.length - 1

          node = node.getChild(char)

          // handles the case of when there is a wordList like
          // ['dog', 'do'], where a word in the list is a subword of an entry that came before it.
          if (isTerminal) {
            node.setTerminal()
          }
        } else {
          const isTerminal = i === word.length - 1
          const newNode = new TrieNode(char, isTerminal)

          node.addChild(char, newNode)
          node = newNode
        }
      }
    })
  }

  _getSubtree(inputStr) {
    let str = inputStr.toLowerCase()

    if (!str) {
      return
    }

    let node = this.trie

    for (let i = 0; i < str.length; i++) {
      const char = str[i]

      node = node.children[char]

      if (!node) {
        break
      }
    }

    return node
  }

  getAllPossibleWords(inputStr) {
    const str = inputStr.toLowerCase()
    const allPossibleWords = []

    let node = this._getSubtree(inputStr)

    function helper(builtString, myNode) {
      const newString = builtString + myNode.value

      if (myNode.isTerminalNode) {
        allPossibleWords.push(newString)
      }

      Object.keys(myNode.children).forEach(char => {
        helper(newString, myNode.children[char])
      })
    }

    // if there is no node, then there are no results for that string
    if (!node) {
      return allPossibleWords
    }

    // check whether the input string is an exact match for a term
    // we don't check in the subtree because we don't want to include results for a term
    if (node.isTerminalNode) {
      allPossibleWords.push(str)
    }

    Object.keys(node.children).forEach(char => {
      helper(str, node.children[char])
    })

    return allPossibleWords
  }

  /**
   * This is a hack for this project.
   *
   * Ideally, for a more generic trie, the trie would keep track of which letters are capitalized versus which
   * characters are not capitalized.  However, for this app's usage, the first character of each word in the trie
   * will always be capitalized because they are the IDs of the enemies, and that is the format that the data uses.
   * I also don't really want this in the components because it is returning an ID.  Returning a malformatted ID sounds
   * like a recipe for a tricky bug in the future.
   *
   * Because it's a hack, it's separated into its own function so that it doesn't ruin the tests.
   *
   * I'm not planning on using this trie elsewhere in the app, nor am I planning to make this trie more generic,
   * so I'm okay with taking this shortcut for now.  Maybe I'll change my mind in the future :)
   */
  getAllPossibleWordsWithCapitals(inputStr) {
    return this.getAllPossibleWords(inputStr).map(capitalizeEachWord)
  }
}

class TrieNode {
  constructor(value, isTerminal) {
    this.children = {}
    this.value = value || ''
    this.isTerminalNode = isTerminal || false
  }

  isTerminal() {
    return this.isTerminalNode
  }

  setTerminal() {
    this.isTerminalNode = true
  }

  doesChildExist(key) {
    return !!this.children[key]
  }

  getChild(key) {
    return this.children[key]
  }

  addChild(key, value) {
    if (this.children.hasOwnProperty(key)) {
      throw new Error('Key already exists in trie.')
    }

    this.children[key] = value
  }
}
