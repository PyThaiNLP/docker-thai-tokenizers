from cutkum.tokenizer import Cutkum

ck = Cutkum()

def tokeniser(sentence, method):
    return ck.tokenize(sentence)