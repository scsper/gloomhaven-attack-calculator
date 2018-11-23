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
