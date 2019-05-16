# Tokenisers for Thai
Objectives

## Setup
- Pull necessary Docker images. Please check [Docker Hub][dockerhub] for the avaliable images.
  ```
  $ docker pull thai-tokeniser:*
  ```
## Usages
1. Put text files that you want to tokenise into `./data`.
2. Run the following command ...
  ```
  $ ./scripts/tokenise.sh <vendor>:<method> <**filename**>
  ```
  Please see [Vendors][vendors] for available vendors and methods.

### Example
Let's say you want to tokenise text in `./data/example.text` using PyThaiNLP's `newmm` algorithm. You can use the following command:
```
$ cat ./data/example.text
อันนี้คือตัวอย่าง

$ ./scripts/tokenise.sh pythainlp:newmm example.text
# Please be aware that you don't need to have ./data in front of the filename.
# Command Output
Tokenising example.text using vendor=pythainlp and method=newmm
CMD: docker run -v /Users/heytitle/projects/tokenisers-for-thai/data:/data  thai-tokeniser:pythainlp newmm example.text
100%|██████████| 1/1 [00:00<00:00, 151.70it/s]
Tokenising /data/example.text with newmm
Tokenised text is written to /data/example_tokenised-pythainlp-newmm.text

$ cat ./data/example_tokenised-pythainlp-newmm.text
อันนี้|คือ|ตัวอย่าง
```
Please check [Vendors section][vendors] for available vendors and methods.


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
