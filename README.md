# Tokenisers for Thai
Objectives

## Setup
- Pull necessary Docker images. Please check [Docker Hub][dockerhub] for the avaliable images.
  ```
  $ docker pull thai-tokeniser:*
  ```
- Put text files that you want to tokenise into `./data`.
- Run the following command ...
  ```
  $ ./scripts/tokenise.sh <vendor>:<method> <**filename**>
  # for example: ./tokenise.sh pythainlp:newmm best-2010-TEST_100K.txt
  ```
  Please see [Vendors][#vendors] for available vendors and methods.

## Vendors 
- [PyThaiNLP][pythainlp]: done
    - engines: newmm, longest
- [DeepCut][deepcut]: done
- [CutKum][cutkum]: done
- [Thai Language Toolkit][tltk]: done
  - engines: mm, ngram, colloc 
- [SWATH][swath]: 
  - methods: max, long
- ~~[Multi-Candidate-Word-Segmentation (MCWS)][mcws]~~: TBD.

## Development
### Architecture
TBD.

### Build a vendor's new Docker image
```
$ ./scripts/build <vendor>
```
**Remark:**
- For `mcmw` you need to download its artifacts and keep them in `./vendors/mcmw/artifact`.
### Push a new Docker image to Docker Hub
```
$ ./scripts/push <vendor>
```
# Acknowledgements
- .

[pythainlp]: https://github.com/PyThaiNLP/pythainlp
[deepcut]: https://github.com/rkcosmos/deepcut
[mcws]: https://github.com/earthy123/Multi-Candidate-Word-Segmentation
[cutkum]: https://github.com/pucktada/cutkum
[tltk]: https://pypi.python.org/pypi/tltk/
[swath]: https://github.com/tlwg/swath
[dockerhub]: https://hub.docker.com/r/heytitle/thai-tokeniser/tags
