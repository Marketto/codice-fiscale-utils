window.lunrData = {
  "index": {
    "version": "1.0.0",
    "fields": [
      {
        "name": "longname",
        "boost": 1000
      },
      {
        "name": "name",
        "boost": 500
      },
      {
        "name": "tags",
        "boost": 300
      },
      {
        "name": "kind",
        "boost": 110
      },
      {
        "name": "title",
        "boost": 100
      },
      {
        "name": "summary",
        "boost": 70
      },
      {
        "name": "description",
        "boost": 50
      },
      {
        "name": "body",
        "boost": 1
      }
    ],
    "ref": "id",
    "tokenizer": "default",
    "documentStore": {
      "store": {
        "index.html": [
          "codic",
          "fiscal",
          "handl",
          "index",
          "italian",
          "js",
          "readm",
          "util"
        ],
        "global.html": [
          "document",
          "global"
        ]
      },
      "length": 2
    },
    "tokenStore": {
      "root": {
        "docs": {},
        "c": {
          "docs": {},
          "o": {
            "docs": {},
            "d": {
              "docs": {},
              "i": {
                "docs": {},
                "c": {
                  "docs": {
                    "index.html": {
                      "ref": "index.html",
                      "tf": 211.66666666666666
                    }
                  }
                }
              }
            }
          }
        },
        "f": {
          "docs": {},
          "i": {
            "docs": {},
            "s": {
              "docs": {},
              "c": {
                "docs": {},
                "a": {
                  "docs": {},
                  "l": {
                    "docs": {
                      "index.html": {
                        "ref": "index.html",
                        "tf": 211.66666666666666
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "h": {
          "docs": {},
          "a": {
            "docs": {},
            "n": {
              "docs": {},
              "d": {
                "docs": {},
                "l": {
                  "docs": {
                    "index.html": {
                      "ref": "index.html",
                      "tf": 11.666666666666666
                    }
                  }
                }
              }
            }
          }
        },
        "i": {
          "docs": {},
          "n": {
            "docs": {},
            "d": {
              "docs": {},
              "e": {
                "docs": {},
                "x": {
                  "docs": {
                    "index.html": {
                      "ref": "index.html",
                      "tf": 1300
                    }
                  }
                }
              }
            }
          },
          "t": {
            "docs": {},
            "a": {
              "docs": {},
              "l": {
                "docs": {},
                "i": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "n": {
                      "docs": {
                        "index.html": {
                          "ref": "index.html",
                          "tf": 11.666666666666666
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "j": {
          "docs": {},
          "s": {
            "docs": {
              "index.html": {
                "ref": "index.html",
                "tf": 11.666666666666666
              }
            }
          }
        },
        "r": {
          "docs": {},
          "e": {
            "docs": {},
            "a": {
              "docs": {},
              "d": {
                "docs": {},
                "m": {
                  "docs": {
                    "index.html": {
                      "ref": "index.html",
                      "tf": 110
                    }
                  }
                }
              }
            }
          }
        },
        "u": {
          "docs": {},
          "t": {
            "docs": {},
            "i": {
              "docs": {},
              "l": {
                "docs": {
                  "index.html": {
                    "ref": "index.html",
                    "tf": 211.66666666666666
                  }
                }
              }
            }
          }
        },
        "d": {
          "docs": {},
          "o": {
            "docs": {},
            "c": {
              "docs": {},
              "u": {
                "docs": {},
                "m": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "t": {
                        "docs": {
                          "global.html": {
                            "ref": "global.html",
                            "tf": 35
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "g": {
          "docs": {},
          "l": {
            "docs": {},
            "o": {
              "docs": {},
              "b": {
                "docs": {},
                "a": {
                  "docs": {},
                  "l": {
                    "docs": {
                      "global.html": {
                        "ref": "global.html",
                        "tf": 2045
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      "length": 10
    },
    "corpusTokens": [
      "codic",
      "document",
      "fiscal",
      "global",
      "handl",
      "index",
      "italian",
      "js",
      "readm",
      "util"
    ],
    "pipeline": [
      "trimmer",
      "stopWordFilter",
      "stemmer"
    ]
  },
  "store": {
    "index.html": {
      "id": "index.html",
      "kind": "readme",
      "title": "Codice Fiscale Utils",
      "longname": "index",
      "name": "Codice Fiscale Utils",
      "tags": "index",
      "summary": "JS utilities to handle Italian Codice Fiscale",
      "description": "",
      "body": ""
    },
    "global.html": {
      "id": "global.html",
      "kind": "global",
      "title": "Globals",
      "longname": "global",
      "name": "Globals",
      "tags": "global",
      "summary": "All documented globals.",
      "description": "",
      "body": ""
    }
  }
};