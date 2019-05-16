import os
import sys
import shutil

from tqdm import tqdm

SEP = "|"

if __name__ == "__main__":
    input_file = "/data/%s" % sys.argv[2]
    filename, ext = os.path.splitext(input_file)

    method = sys.argv[1]

    output_file = "%s_tokenised-%s%s" % \
        (filename, "%s-%s" % (vendor, method), ext)

    print("Tokenising %s with %s" % (input_file, method))

    total_lines = sum(1 for line in open(input_file, "r"))
    try:
        with open(input_file, "r") as fin: 
            with open(output_file, "w") as fout:
                for line in tqdm(fin, total=total_lines):
                    line = line.strip()
                    tokenised = tokeniser(line, method=method)
                    fout.write("%s\n" % SEP.join(tokenised))
            print("Tokenised text is written to %s" % output_file)
    except Exception as error:
        print(error)
        shutil.rmtree(output_file)