from pythainlp.tokenize import word_tokenize

def tokeniser(sentence, method):
    return word_tokenize(sentence, engine=method)