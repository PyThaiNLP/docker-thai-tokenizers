from tltk.nlp import word_segment

def tokeniser(sentence, method):
    return word_segment(sentence, method=method)