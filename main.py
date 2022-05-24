# Check if a word is an anagrams 
# Example:
# find_anagrams("hello") --> False
# find_anagrams("racecar") --> True


def find_anagrams(word):
    new_word = ''.join(reversed(word))
    if word == new_word:
        return True
    else:
        return False


print(find_anagrams("racecar"))
