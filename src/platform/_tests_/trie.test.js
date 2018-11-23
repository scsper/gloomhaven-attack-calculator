import Trie from '../trie'

describe('./platform/trie', () => {
  describe('building the trie', () => {
    it('builds a trie with one word correctly', () => {
      const wordList = ['dog']
      const trie = new Trie(wordList)
      const expectedTrie = {
        trie: {
          isTerminalNode: false,
          value: '',
          children: {
            d: {
              value: 'd',
              isTerminalNode: false,
              children: {
                o: {
                  value: 'o',
                  isTerminalNode: false,
                  children: {
                    g: {
                      children: {},
                      isTerminalNode: true,
                      value: 'g'
                    }
                  }
                }
              }
            }
          }
        }
      }

      expect(trie).toEqual(expectedTrie)
    })

    it('builds a trie with shared nodes correctly', () => {
      const wordList = ['dog', 'don']
      const trie = new Trie(wordList)
      const expectedTrie = {
        trie: {
          isTerminalNode: false,
          value: '',
          children: {
            d: {
              value: 'd',
              isTerminalNode: false,
              children: {
                o: {
                  value: 'o',
                  isTerminalNode: false,
                  children: {
                    g: {
                      children: {},
                      isTerminalNode: true,
                      value: 'g'
                    },
                    n: {
                      children: {},
                      isTerminalNode: true,
                      value: 'n'
                    }
                  }
                }
              }
            }
          }
        }
      }

      expect(trie).toEqual(expectedTrie)
    })

    it('builds a trie where a subword of a previous entry is contained in the word list', () => {
      const wordList = ['dog', 'do']
      const trie = new Trie(wordList)
      const expectedTrie = {
        trie: {
          isTerminalNode: false,
          value: '',
          children: {
            d: {
              value: 'd',
              isTerminalNode: false,
              children: {
                o: {
                  value: 'o',
                  isTerminalNode: true,
                  children: {
                    g: {
                      children: {},
                      isTerminalNode: true,
                      value: 'g'
                    }
                  }
                }
              }
            }
          }
        }
      }

      expect(trie).toEqual(expectedTrie)
    })

    it('builds a trie in a case-agnostic fashion', () => {
      const wordList = ['dog', 'Dog']
      const trie = new Trie(wordList)
      const expectedTrie = {
        trie: {
          isTerminalNode: false,
          value: '',
          children: {
            d: {
              value: 'd',
              isTerminalNode: false,
              children: {
                o: {
                  value: 'o',
                  isTerminalNode: false,
                  children: {
                    g: {
                      children: {},
                      isTerminalNode: true,
                      value: 'g'
                    }
                  }
                }
              }
            }
          }
        }
      }

      expect(trie).toEqual(expectedTrie)
    })
  })

  describe('#getAllPossibleWords', () => {
    it('returns the correct word for the simple case', () => {
      const wordList = ['dog']
      const trie = new Trie(wordList)
      const allPossibleWords = trie.getAllPossibleWords('d')

      expect(allPossibleWords).toEqual(['dog'])
    })

    it('returns an exact match', () => {
      const wordList = ['dog']
      const trie = new Trie(wordList)
      const allPossibleWords = trie.getAllPossibleWords('dog')

      expect(allPossibleWords).toEqual(['dog'])
    })

    it('returns a single result when there are multiple words', () => {
      const wordList = ['dogging', 'donut']
      const trie = new Trie(wordList)
      const allPossibleWords = trie.getAllPossibleWords('dog')

      expect(allPossibleWords).toEqual(['dogging'])
    })

    it('returns multiple results when there are multiple words', () => {
      const wordList = ['dog', 'don']
      const trie = new Trie(wordList)
      const allPossibleWords = trie.getAllPossibleWords('do')

      expect(allPossibleWords).toEqual(['dog', 'don'])
    })

    it('returns an empty array when there are no results', () => {
      const wordList = ['dog', 'don']
      const trie = new Trie(wordList)
      const allPossibleWords = trie.getAllPossibleWords('empty')

      expect(allPossibleWords).toEqual([])
    })

    it('returns an empty array for an empty string', () => {
      const wordList = ['dog', 'don']
      const trie = new Trie(wordList)
      const allPossibleWords = trie.getAllPossibleWords('')

      expect(allPossibleWords).toEqual([])
    })
  })
})
