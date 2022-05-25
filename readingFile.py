# Read text from a file, and count the occurrence of words in that text
# Example:
# count_words("The cake is done. It is a big cake!")
# --> {"cake":2, "big":1, "is":2, "the":1, "a":1, "it":1}

def read_file_content(filename):
    # [assignment] Add your code here
    if not filename:
        print('File name cannot be empty')
    with open(filename) as f:
        text = f.read()
        return text


def count_words():
    text = read_file_content("./story.txt")
    # [assignment] Add your code here
    text_list = text.split()
    print(len(text_list))
    text_dic = {}
    for text in text_list:
        if not text in text_dic:
            text_dic[text] = 1
        else:
            text_dic[text] += 1
    print(text_dic)
    return text_dic


count_words()
