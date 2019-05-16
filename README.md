# Tokenisers for Thai
Objectives

## Setup
- Pull necessary Docker images
  ```
  $ docker pull thai-tokeniser:*
  ```
- Put text files that you want to tokenise into `./data`.
- Run the following command ...
  ```
  $ ./tokenise <vendor>:<method> <filename>
  ```
  Please see [Vendors][#vendors] for available vendors and methods.

## Vendors 
- [PyThaiNLP][pythainlp]: done
    - engines: newmm, longest
- [DeepCut][deepcut]: done
- [Multi-Candidate-Word-Segmentation (MCWS)][mcws]: ..
- [CutKum][cutkum]: done
- [Thai Language Toolkit][tltk]: done
  - engines: mm, ngram, colloc 
- [SWATH][swath]: c..

## Development
### Build a vendor's new Docker image
```
$ ./build <vendor>
```
**Remark:**
- For `mcmw` you need to download its artifacts and keep them in `./vendors/mcmw/artifact`.


```
docker run -v `pwd`/data:/data  thai-tokeniser:pythainlp newmm best-2010-TEST_100K.txt
```

```

tmp-build 
  |- tokenise.sh
  |- cat main.py >> vendor.py
  | all from vendor

vendors
  |- pythainlp
  |- cutkum

tokenise.sh
main.py
```

# Acknowledgements
- .

[pythainlp]: https://github.com/PyThaiNLP/pythainlp
[deepcut]: https://github.com/rkcosmos/deepcut
[mcws]: https://github.com/earthy123/Multi-Candidate-Word-Segmentation
[cutkum]: https://github.com/pucktada/cutkum
[tltk]: https://pypi.python.org/pypi/tltk/
[swath]: https://github.com/tlwg/swath
