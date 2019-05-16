# Thai Tokenisers

This repository is a collection of almost all Thai tokenisers that are publicly available. Having this collection allows us to try each algorithm as ease via Docker.

Technically, each project (called  `vendor`) has its own Docker image with a `entry` script and auxiliary scripts.
These scripts bring a unified interface, allowing us to run those algorithms in the same way.

## Vendors 
| Vendor | Alias | Available Methods |
|---|---|---|
| [PyThaiNLP][pythainlp] | pythainlp | newmm, longest  |
| [DeepCut][deepcut] | deepcut |  deepcut  |
| [CutKum][cutkum]  |  cutkum  | cutkum |
| [Thai Language Toolkit][tltk]  |  tltk | mm, ngram, colloc |
| [Smart Word Analysis for Thai (SWATH)][swath] | swath | max, long |
| ~~[Multi-Candidate-Word-Segmentation (MCWS)][mcws]~~ (TODO) | |

Please see [Usages](#usages) for more details.

## Setup
- Pull necessary Docker images. Please check [Docker Hub][dockerhub] for the avaliable images.
  ```
  $ docker pull heytitle/thai-tokeniser:<vendor-alias>
  ```
## Usages
1. Put text files that you want to tokenise into `./data`.
2. Run the following command ...
  ```
  $ ./scripts/tokenise.sh <vendor-alias>:<method> <**filename**>
  ```
  Please check [Vendors section](#vendors) for available vendors and methods.

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
## Acknowledgements
- This repository is part of my internship at [Dr. Attapol Thamrongrattanarit][ate]'s NLP Lab, Chulalongkorn University, Bangkok, Thailand.

[pythainlp]: https://github.com/PyThaiNLP/pythainlp
[deepcut]: https://github.com/rkcosmos/deepcut
[mcws]: https://github.com/earthy123/Multi-Candidate-Word-Segmentation
[cutkum]: https://github.com/pucktada/cutkum
[tltk]: https://pypi.python.org/pypi/tltk/
[swath]: https://github.com/tlwg/swath
[dockerhub]: https://hub.docker.com/r/heytitle/thai-tokeniser/tags
[ate]: https://attapol.github.io