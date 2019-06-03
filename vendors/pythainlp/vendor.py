from pythainlp.tokenize import word_tokenize, syllable_tokenize

def tokeniser(sentence, method):
    if method == "syllable":
        return syllable_tokenize(sentence)
    else:
        return word_tokenize(sentence, engine=method)