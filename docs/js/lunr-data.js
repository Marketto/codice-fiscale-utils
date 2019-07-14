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
        ],
        "list_class.html": [
          "class",
          "document",
          "list",
          "list:class"
        ],
        "list_module.html": [
          "document",
          "list",
          "list:modul",
          "modul"
        ],
        "Belfiore.Belfiore.html": [
          "belfior",
          "belfiore.belfior",
          "class"
        ],
        "CodiceFiscaleUtils.Parser.html": [
          "class",
          "codicefiscaleutils.pars",
          "parser"
        ],
        "CodiceFiscaleUtils.Parser.html#.Parser.OMOCODE_BITMAP": [
          "bitmap",
          "codicefiscaleutils.parser.parser.omocode_bitmap",
          "default",
          "lt;static",
          "member",
          "omocod",
          "omocode_bitmap",
          "parser.omocode_bitmap",
          "parser.parser.omocode_bitmap",
          "readonly&gt"
        ],
        "CodiceFiscaleUtils.Parser.html#.Parser.cfDeomocode": [
          "cfdeomocod",
          "codicefiscal",
          "codicefiscaleutils.parser.parser.cfdeomocod",
          "function",
          "inform",
          "lt;static&gt",
          "pars",
          "parser.cfdeomocod",
          "parser.parser.cfdeomocod",
          "string|nul",
          "surnam"
        ],
        "CodiceFiscaleUtils.Parser.html#.Parser.cfToSurname": [
          "cftosurnam",
          "codicefiscal",
          "codicefiscaleutils.parser.parser.cftosurnam",
          "function",
          "inform",
          "lt;static&gt",
          "pars",
          "parser.cftosurnam",
          "parser.parser.cftosurnam",
          "string|nul",
          "surnam"
        ],
        "CodiceFiscaleUtils.Parser.html#.Parser.cfToName": [
          "cftonam",
          "codicefiscal",
          "codicefiscaleutils.parser.parser.cftonam",
          "function",
          "inform",
          "lt;static&gt",
          "name",
          "pars",
          "parser.cftonam",
          "parser.parser.cftonam",
          "string|nul"
        ],
        "CodiceFiscaleUtils.Parser.html#.Parser.cfToGender": [
          "cftogend",
          "codicefiscal",
          "codicefiscaleutils.parser.parser.cftogend",
          "function",
          "gender",
          "inform",
          "lt;static&gt",
          "m'|'f'|null",
          "pars",
          "parser.cftogend",
          "parser.parser.cftogend"
        ],
        "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthYear": [
          "birth",
          "cftobirthyear",
          "codicefiscal",
          "codicefiscaleutils.parser.parser.cftobirthyear",
          "function",
          "inform",
          "lt;static&gt",
          "number|nul",
          "pars",
          "parser.cftobirthyear",
          "parser.parser.cftobirthyear",
          "year"
        ],
        "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthMonth": [
          "birth",
          "cftobirthmonth",
          "codicefiscal",
          "codicefiscaleutils.parser.parser.cftobirthmonth",
          "function",
          "inform",
          "lt;static&gt",
          "month",
          "number|nul",
          "pars",
          "parser.cftobirthmonth",
          "parser.parser.cftobirthmonth"
        ],
        "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDay": [
          "birth",
          "cftobirthday",
          "codicefiscal",
          "codicefiscaleutils.parser.parser.cftobirthday",
          "day",
          "function",
          "inform",
          "lt;static&gt",
          "number|nul",
          "pars",
          "parser.cftobirthday",
          "parser.parser.cftobirthday"
        ],
        "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDate": [
          "birth",
          "cftobirthd",
          "codicefiscal",
          "codicefiscaleutils.parser.parser.cftobirthd",
          "date",
          "date|nul",
          "function",
          "inform",
          "lt;static&gt",
          "pars",
          "parser.cftobirthd",
          "parser.parser.cftobirthd"
        ],
        "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthPlace": [
          "birth",
          "cftobirthplac",
          "codicefiscal",
          "codicefiscaleutils.parser.parser.cftobirthplac",
          "function",
          "inform",
          "lt;static&gt",
          "object",
          "pars",
          "parser.cftobirthplac",
          "parser.parser.cftobirthplac",
          "place"
        ],
        "CodiceFiscaleUtils.Parser.html#.Parser.surnameToCf": [
          "cf",
          "codicefiscaleutils.parser.parser.surnametocf",
          "function",
          "lt;static&gt",
          "pars",
          "parser.parser.surnametocf",
          "parser.surnametocf",
          "part",
          "string|nul",
          "surnam",
          "surnametocf"
        ],
        "CodiceFiscaleUtils.Parser.html#.Parser.nameToCf": [
          "cf",
          "codicefiscaleutils.parser.parser.nametocf",
          "function",
          "lt;static&gt",
          "name",
          "nametocf",
          "pars",
          "parser.nametocf",
          "parser.parser.nametocf",
          "part",
          "string|nul"
        ],
        "CodiceFiscaleUtils.Parser.html#.Parser.yearToCf": [
          "cf",
          "codicefiscaleutils.parser.parser.yeartocf",
          "function",
          "lt;static&gt",
          "pars",
          "parser.parser.yeartocf",
          "parser.yeartocf",
          "part",
          "string|nul",
          "year",
          "yeartocf"
        ],
        "CodiceFiscaleUtils.Parser.html#.Parser.monthToCf": [
          "codicefiscaleutils.parser.parser.monthtocf",
          "function",
          "inform",
          "lt;static&gt",
          "month",
          "monthtocf",
          "pars",
          "parser.monthtocf",
          "parser.parser.monthtocf",
          "string|nul"
        ],
        "CodiceFiscaleUtils.Parser.html#.Parser.dayGenderToCf": [
          "codicefiscaleutils.parser.parser.daygendertocf",
          "day",
          "daygendertocf",
          "function",
          "gender",
          "inform",
          "lt;static&gt",
          "pars",
          "parser.daygendertocf",
          "parser.parser.daygendertocf",
          "string|nul"
        ],
        "CodiceFiscaleUtils.Parser.html#.Parser.parseDate": [
          "cf",
          "codicefiscaleutils.parser.parser.parsed",
          "creat",
          "date",
          "date/gend",
          "date|nul",
          "function",
          "gender",
          "inform",
          "lt;static&gt",
          "pars",
          "parsed",
          "parser.parsed",
          "parser.parser.parsed",
          "part"
        ],
        "CodiceFiscaleUtils.Parser.html#.Parser.dateGenderToCf": [
          "cf",
          "codicefiscaleutils.parser.parser.dategendertocf",
          "creat",
          "date",
          "date/gend",
          "dategendertocf",
          "function",
          "gender",
          "inform",
          "lt;static&gt",
          "pars",
          "parser.dategendertocf",
          "parser.parser.dategendertocf",
          "part",
          "string|nul"
        ],
        "CodiceFiscaleUtils.Parser.html#.Parser.placeToCf": [
          "belfior",
          "code",
          "codicefiscaleutils.parser.parser.placetocf",
          "function",
          "lt;static&gt",
          "name",
          "pars",
          "parser.parser.placetocf",
          "parser.placetocf",
          "place",
          "placetocf",
          "provinc",
          "string|nul"
        ],
        "CodiceFiscaleUtils.Validator_.html": [
          "class",
          "codicefiscaleutils.valid",
          "valid"
        ],
        "CodiceFiscaleUtils.Validator_.html#.Validator.cfSurname": [
          "cfsurnam",
          "codicefiscaleutils.validator.validator.cfsurnam",
          "function",
          "gener",
          "given",
          "lt;static&gt",
          "regexp",
          "surnam",
          "valid",
          "validator.cfsurnam",
          "validator.validator.cfsurnam"
        ],
        "CodiceFiscaleUtils.Validator_.html#.Validator.cfName": [
          "cfname",
          "codicefiscaleutils.validator.validator.cfnam",
          "function",
          "gener",
          "given",
          "lt;static&gt",
          "name",
          "regexp",
          "valid",
          "validator.cfnam",
          "validator.validator.cfnam"
        ],
        "CodiceFiscaleUtils.Validator_.html#.Validator.cfYear": [
          "cfyear",
          "codicefiscaleutils.validator.validator.cfyear",
          "function",
          "gener",
          "given",
          "lt;static&gt",
          "regexp",
          "valid",
          "validator.cfyear",
          "validator.validator.cfyear",
          "year"
        ],
        "CodiceFiscaleUtils.Validator_.html#.Validator.cfMonth": [
          "cfmonth",
          "codicefiscaleutils.validator.validator.cfmonth",
          "function",
          "gener",
          "given",
          "lt;static&gt",
          "month",
          "regexp",
          "valid",
          "validator.cfmonth",
          "validator.validator.cfmonth"
        ],
        "CodiceFiscaleUtils.Validator_.html#.Validator.cfDay": [
          "cfday",
          "codicefiscaleutils.validator.validator.cfday",
          "day",
          "function",
          "gener",
          "given",
          "lt;static&gt",
          "regexp",
          "valid",
          "validator.cfday",
          "validator.validator.cfday",
          "year"
        ],
        "CodiceFiscaleUtils.Validator_.html#.Validator.cfDayGender": [
          "cfdaygend",
          "codicefiscaleutils.validator.validator.cfdaygend",
          "day",
          "function",
          "gender",
          "gener",
          "given",
          "lt;static&gt",
          "regexp",
          "valid",
          "validator.cfdaygend",
          "validator.validator.cfdaygend",
          "year"
        ],
        "CodiceFiscaleUtils.Validator_.html#.Validator.cfDateGender": [
          "cfdategend",
          "codicefiscaleutils.validator.validator.cfdategend",
          "date",
          "function",
          "gender",
          "gener",
          "given",
          "lt;static&gt",
          "regexp",
          "valid",
          "validator.cfdategend",
          "validator.validator.cfdategend",
          "year"
        ],
        "CodiceFiscaleUtils.Validator_.html#.Validator.cfPlace": [
          "cfplace",
          "codicefiscaleutils.validator.validator.cfplac",
          "date",
          "function",
          "lt;static&gt",
          "placenam",
          "regexp",
          "validator.cfplac",
          "validator.validator.cfplac"
        ],
        "module-CodiceFiscaleUtils.html": [
          "codicefiscaleutil",
          "modul",
          "module:codicefiscaleutil"
        ]
      },
      "length": 34
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
                  },
                  "e": {
                    "docs": {},
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
                                  "CodiceFiscaleUtils.Parser.html#.Parser.cfDeomocode": {
                                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfDeomocode",
                                    "tf": 25
                                  },
                                  "CodiceFiscaleUtils.Parser.html#.Parser.cfToSurname": {
                                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToSurname",
                                    "tf": 25
                                  },
                                  "CodiceFiscaleUtils.Parser.html#.Parser.cfToName": {
                                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToName",
                                    "tf": 25
                                  },
                                  "CodiceFiscaleUtils.Parser.html#.Parser.cfToGender": {
                                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToGender",
                                    "tf": 25
                                  },
                                  "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthYear": {
                                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthYear",
                                    "tf": 25
                                  },
                                  "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthMonth": {
                                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthMonth",
                                    "tf": 25
                                  },
                                  "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDay": {
                                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDay",
                                    "tf": 25
                                  },
                                  "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDate": {
                                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDate",
                                    "tf": 25
                                  },
                                  "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthPlace": {
                                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthPlace",
                                    "tf": 25
                                  }
                                },
                                "e": {
                                  "docs": {},
                                  "u": {
                                    "docs": {},
                                    "t": {
                                      "docs": {},
                                      "i": {
                                        "docs": {},
                                        "l": {
                                          "docs": {
                                            "module-CodiceFiscaleUtils.html": {
                                              "ref": "module-CodiceFiscaleUtils.html",
                                              "tf": 600
                                            }
                                          },
                                          "s": {
                                            "docs": {},
                                            ".": {
                                              "docs": {},
                                              "p": {
                                                "docs": {},
                                                "a": {
                                                  "docs": {},
                                                  "r": {
                                                    "docs": {},
                                                    "s": {
                                                      "docs": {
                                                        "CodiceFiscaleUtils.Parser.html": {
                                                          "ref": "CodiceFiscaleUtils.Parser.html",
                                                          "tf": 1150
                                                        }
                                                      },
                                                      "e": {
                                                        "docs": {},
                                                        "r": {
                                                          "docs": {},
                                                          ".": {
                                                            "docs": {},
                                                            "p": {
                                                              "docs": {},
                                                              "a": {
                                                                "docs": {},
                                                                "r": {
                                                                  "docs": {},
                                                                  "s": {
                                                                    "docs": {},
                                                                    "e": {
                                                                      "docs": {},
                                                                      "r": {
                                                                        "docs": {},
                                                                        ".": {
                                                                          "docs": {},
                                                                          "o": {
                                                                            "docs": {},
                                                                            "m": {
                                                                              "docs": {},
                                                                              "o": {
                                                                                "docs": {},
                                                                                "c": {
                                                                                  "docs": {},
                                                                                  "o": {
                                                                                    "docs": {},
                                                                                    "d": {
                                                                                      "docs": {},
                                                                                      "e": {
                                                                                        "docs": {},
                                                                                        "_": {
                                                                                          "docs": {},
                                                                                          "b": {
                                                                                            "docs": {},
                                                                                            "i": {
                                                                                              "docs": {},
                                                                                              "t": {
                                                                                                "docs": {},
                                                                                                "m": {
                                                                                                  "docs": {},
                                                                                                  "a": {
                                                                                                    "docs": {},
                                                                                                    "p": {
                                                                                                      "docs": {
                                                                                                        "CodiceFiscaleUtils.Parser.html#.Parser.OMOCODE_BITMAP": {
                                                                                                          "ref": "CodiceFiscaleUtils.Parser.html#.Parser.OMOCODE_BITMAP",
                                                                                                          "tf": 1075
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
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
                                                                          "c": {
                                                                            "docs": {},
                                                                            "f": {
                                                                              "docs": {},
                                                                              "d": {
                                                                                "docs": {},
                                                                                "e": {
                                                                                  "docs": {},
                                                                                  "o": {
                                                                                    "docs": {},
                                                                                    "m": {
                                                                                      "docs": {},
                                                                                      "o": {
                                                                                        "docs": {},
                                                                                        "c": {
                                                                                          "docs": {},
                                                                                          "o": {
                                                                                            "docs": {},
                                                                                            "d": {
                                                                                              "docs": {
                                                                                                "CodiceFiscaleUtils.Parser.html#.Parser.cfDeomocode": {
                                                                                                  "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfDeomocode",
                                                                                                  "tf": 1075
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
                                                                              "t": {
                                                                                "docs": {},
                                                                                "o": {
                                                                                  "docs": {},
                                                                                  "s": {
                                                                                    "docs": {},
                                                                                    "u": {
                                                                                      "docs": {},
                                                                                      "r": {
                                                                                        "docs": {},
                                                                                        "n": {
                                                                                          "docs": {},
                                                                                          "a": {
                                                                                            "docs": {},
                                                                                            "m": {
                                                                                              "docs": {
                                                                                                "CodiceFiscaleUtils.Parser.html#.Parser.cfToSurname": {
                                                                                                  "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToSurname",
                                                                                                  "tf": 1075
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  },
                                                                                  "n": {
                                                                                    "docs": {},
                                                                                    "a": {
                                                                                      "docs": {},
                                                                                      "m": {
                                                                                        "docs": {
                                                                                          "CodiceFiscaleUtils.Parser.html#.Parser.cfToName": {
                                                                                            "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToName",
                                                                                            "tf": 1075
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  },
                                                                                  "g": {
                                                                                    "docs": {},
                                                                                    "e": {
                                                                                      "docs": {},
                                                                                      "n": {
                                                                                        "docs": {},
                                                                                        "d": {
                                                                                          "docs": {
                                                                                            "CodiceFiscaleUtils.Parser.html#.Parser.cfToGender": {
                                                                                              "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToGender",
                                                                                              "tf": 1075
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  },
                                                                                  "b": {
                                                                                    "docs": {},
                                                                                    "i": {
                                                                                      "docs": {},
                                                                                      "r": {
                                                                                        "docs": {},
                                                                                        "t": {
                                                                                          "docs": {},
                                                                                          "h": {
                                                                                            "docs": {},
                                                                                            "y": {
                                                                                              "docs": {},
                                                                                              "e": {
                                                                                                "docs": {},
                                                                                                "a": {
                                                                                                  "docs": {},
                                                                                                  "r": {
                                                                                                    "docs": {
                                                                                                      "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthYear": {
                                                                                                        "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthYear",
                                                                                                        "tf": 1075
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            },
                                                                                            "m": {
                                                                                              "docs": {},
                                                                                              "o": {
                                                                                                "docs": {},
                                                                                                "n": {
                                                                                                  "docs": {},
                                                                                                  "t": {
                                                                                                    "docs": {},
                                                                                                    "h": {
                                                                                                      "docs": {
                                                                                                        "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthMonth": {
                                                                                                          "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthMonth",
                                                                                                          "tf": 1075
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            },
                                                                                            "d": {
                                                                                              "docs": {
                                                                                                "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDate": {
                                                                                                  "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDate",
                                                                                                  "tf": 1075
                                                                                                }
                                                                                              },
                                                                                              "a": {
                                                                                                "docs": {},
                                                                                                "y": {
                                                                                                  "docs": {
                                                                                                    "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDay": {
                                                                                                      "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDay",
                                                                                                      "tf": 1075
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            },
                                                                                            "p": {
                                                                                              "docs": {},
                                                                                              "l": {
                                                                                                "docs": {},
                                                                                                "a": {
                                                                                                  "docs": {},
                                                                                                  "c": {
                                                                                                    "docs": {
                                                                                                      "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthPlace": {
                                                                                                        "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthPlace",
                                                                                                        "tf": 1075
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
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
                                                                          "s": {
                                                                            "docs": {},
                                                                            "u": {
                                                                              "docs": {},
                                                                              "r": {
                                                                                "docs": {},
                                                                                "n": {
                                                                                  "docs": {},
                                                                                  "a": {
                                                                                    "docs": {},
                                                                                    "m": {
                                                                                      "docs": {},
                                                                                      "e": {
                                                                                        "docs": {},
                                                                                        "t": {
                                                                                          "docs": {},
                                                                                          "o": {
                                                                                            "docs": {},
                                                                                            "c": {
                                                                                              "docs": {},
                                                                                              "f": {
                                                                                                "docs": {
                                                                                                  "CodiceFiscaleUtils.Parser.html#.Parser.surnameToCf": {
                                                                                                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.surnameToCf",
                                                                                                    "tf": 1075
                                                                                                  }
                                                                                                }
                                                                                              }
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
                                                                          "n": {
                                                                            "docs": {},
                                                                            "a": {
                                                                              "docs": {},
                                                                              "m": {
                                                                                "docs": {},
                                                                                "e": {
                                                                                  "docs": {},
                                                                                  "t": {
                                                                                    "docs": {},
                                                                                    "o": {
                                                                                      "docs": {},
                                                                                      "c": {
                                                                                        "docs": {},
                                                                                        "f": {
                                                                                          "docs": {
                                                                                            "CodiceFiscaleUtils.Parser.html#.Parser.nameToCf": {
                                                                                              "ref": "CodiceFiscaleUtils.Parser.html#.Parser.nameToCf",
                                                                                              "tf": 1075
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
                                                                          "y": {
                                                                            "docs": {},
                                                                            "e": {
                                                                              "docs": {},
                                                                              "a": {
                                                                                "docs": {},
                                                                                "r": {
                                                                                  "docs": {},
                                                                                  "t": {
                                                                                    "docs": {},
                                                                                    "o": {
                                                                                      "docs": {},
                                                                                      "c": {
                                                                                        "docs": {},
                                                                                        "f": {
                                                                                          "docs": {
                                                                                            "CodiceFiscaleUtils.Parser.html#.Parser.yearToCf": {
                                                                                              "ref": "CodiceFiscaleUtils.Parser.html#.Parser.yearToCf",
                                                                                              "tf": 1075
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
                                                                          "m": {
                                                                            "docs": {},
                                                                            "o": {
                                                                              "docs": {},
                                                                              "n": {
                                                                                "docs": {},
                                                                                "t": {
                                                                                  "docs": {},
                                                                                  "h": {
                                                                                    "docs": {},
                                                                                    "t": {
                                                                                      "docs": {},
                                                                                      "o": {
                                                                                        "docs": {},
                                                                                        "c": {
                                                                                          "docs": {},
                                                                                          "f": {
                                                                                            "docs": {
                                                                                              "CodiceFiscaleUtils.Parser.html#.Parser.monthToCf": {
                                                                                                "ref": "CodiceFiscaleUtils.Parser.html#.Parser.monthToCf",
                                                                                                "tf": 1075
                                                                                              }
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
                                                                          "d": {
                                                                            "docs": {},
                                                                            "a": {
                                                                              "docs": {},
                                                                              "y": {
                                                                                "docs": {},
                                                                                "g": {
                                                                                  "docs": {},
                                                                                  "e": {
                                                                                    "docs": {},
                                                                                    "n": {
                                                                                      "docs": {},
                                                                                      "d": {
                                                                                        "docs": {},
                                                                                        "e": {
                                                                                          "docs": {},
                                                                                          "r": {
                                                                                            "docs": {},
                                                                                            "t": {
                                                                                              "docs": {},
                                                                                              "o": {
                                                                                                "docs": {},
                                                                                                "c": {
                                                                                                  "docs": {},
                                                                                                  "f": {
                                                                                                    "docs": {
                                                                                                      "CodiceFiscaleUtils.Parser.html#.Parser.dayGenderToCf": {
                                                                                                        "ref": "CodiceFiscaleUtils.Parser.html#.Parser.dayGenderToCf",
                                                                                                        "tf": 1075
                                                                                                      }
                                                                                                    }
                                                                                                  }
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
                                                                              "t": {
                                                                                "docs": {},
                                                                                "e": {
                                                                                  "docs": {},
                                                                                  "g": {
                                                                                    "docs": {},
                                                                                    "e": {
                                                                                      "docs": {},
                                                                                      "n": {
                                                                                        "docs": {},
                                                                                        "d": {
                                                                                          "docs": {},
                                                                                          "e": {
                                                                                            "docs": {},
                                                                                            "r": {
                                                                                              "docs": {},
                                                                                              "t": {
                                                                                                "docs": {},
                                                                                                "o": {
                                                                                                  "docs": {},
                                                                                                  "c": {
                                                                                                    "docs": {},
                                                                                                    "f": {
                                                                                                      "docs": {
                                                                                                        "CodiceFiscaleUtils.Parser.html#.Parser.dateGenderToCf": {
                                                                                                          "ref": "CodiceFiscaleUtils.Parser.html#.Parser.dateGenderToCf",
                                                                                                          "tf": 1075
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
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
                                                                          "p": {
                                                                            "docs": {},
                                                                            "a": {
                                                                              "docs": {},
                                                                              "r": {
                                                                                "docs": {},
                                                                                "s": {
                                                                                  "docs": {},
                                                                                  "e": {
                                                                                    "docs": {},
                                                                                    "d": {
                                                                                      "docs": {
                                                                                        "CodiceFiscaleUtils.Parser.html#.Parser.parseDate": {
                                                                                          "ref": "CodiceFiscaleUtils.Parser.html#.Parser.parseDate",
                                                                                          "tf": 1075
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            },
                                                                            "l": {
                                                                              "docs": {},
                                                                              "a": {
                                                                                "docs": {},
                                                                                "c": {
                                                                                  "docs": {},
                                                                                  "e": {
                                                                                    "docs": {},
                                                                                    "t": {
                                                                                      "docs": {},
                                                                                      "o": {
                                                                                        "docs": {},
                                                                                        "c": {
                                                                                          "docs": {},
                                                                                          "f": {
                                                                                            "docs": {
                                                                                              "CodiceFiscaleUtils.Parser.html#.Parser.placeToCf": {
                                                                                                "ref": "CodiceFiscaleUtils.Parser.html#.Parser.placeToCf",
                                                                                                "tf": 1075
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
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
                                              "v": {
                                                "docs": {},
                                                "a": {
                                                  "docs": {},
                                                  "l": {
                                                    "docs": {},
                                                    "i": {
                                                      "docs": {},
                                                      "d": {
                                                        "docs": {
                                                          "CodiceFiscaleUtils.Validator_.html": {
                                                            "ref": "CodiceFiscaleUtils.Validator_.html",
                                                            "tf": 1150
                                                          }
                                                        },
                                                        "a": {
                                                          "docs": {},
                                                          "t": {
                                                            "docs": {},
                                                            "o": {
                                                              "docs": {},
                                                              "r": {
                                                                "docs": {},
                                                                ".": {
                                                                  "docs": {},
                                                                  "v": {
                                                                    "docs": {},
                                                                    "a": {
                                                                      "docs": {},
                                                                      "l": {
                                                                        "docs": {},
                                                                        "i": {
                                                                          "docs": {},
                                                                          "d": {
                                                                            "docs": {},
                                                                            "a": {
                                                                              "docs": {},
                                                                              "t": {
                                                                                "docs": {},
                                                                                "o": {
                                                                                  "docs": {},
                                                                                  "r": {
                                                                                    "docs": {},
                                                                                    ".": {
                                                                                      "docs": {},
                                                                                      "c": {
                                                                                        "docs": {},
                                                                                        "f": {
                                                                                          "docs": {},
                                                                                          "s": {
                                                                                            "docs": {},
                                                                                            "u": {
                                                                                              "docs": {},
                                                                                              "r": {
                                                                                                "docs": {},
                                                                                                "n": {
                                                                                                  "docs": {},
                                                                                                  "a": {
                                                                                                    "docs": {},
                                                                                                    "m": {
                                                                                                      "docs": {
                                                                                                        "CodiceFiscaleUtils.Validator_.html#.Validator.cfSurname": {
                                                                                                          "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfSurname",
                                                                                                          "tf": 1075
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          },
                                                                                          "n": {
                                                                                            "docs": {},
                                                                                            "a": {
                                                                                              "docs": {},
                                                                                              "m": {
                                                                                                "docs": {
                                                                                                  "CodiceFiscaleUtils.Validator_.html#.Validator.cfName": {
                                                                                                    "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfName",
                                                                                                    "tf": 1075
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          },
                                                                                          "y": {
                                                                                            "docs": {},
                                                                                            "e": {
                                                                                              "docs": {},
                                                                                              "a": {
                                                                                                "docs": {},
                                                                                                "r": {
                                                                                                  "docs": {
                                                                                                    "CodiceFiscaleUtils.Validator_.html#.Validator.cfYear": {
                                                                                                      "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfYear",
                                                                                                      "tf": 1075
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          },
                                                                                          "m": {
                                                                                            "docs": {},
                                                                                            "o": {
                                                                                              "docs": {},
                                                                                              "n": {
                                                                                                "docs": {},
                                                                                                "t": {
                                                                                                  "docs": {},
                                                                                                  "h": {
                                                                                                    "docs": {
                                                                                                      "CodiceFiscaleUtils.Validator_.html#.Validator.cfMonth": {
                                                                                                        "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfMonth",
                                                                                                        "tf": 1075
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          },
                                                                                          "d": {
                                                                                            "docs": {},
                                                                                            "a": {
                                                                                              "docs": {},
                                                                                              "y": {
                                                                                                "docs": {
                                                                                                  "CodiceFiscaleUtils.Validator_.html#.Validator.cfDay": {
                                                                                                    "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfDay",
                                                                                                    "tf": 1075
                                                                                                  }
                                                                                                },
                                                                                                "g": {
                                                                                                  "docs": {},
                                                                                                  "e": {
                                                                                                    "docs": {},
                                                                                                    "n": {
                                                                                                      "docs": {},
                                                                                                      "d": {
                                                                                                        "docs": {
                                                                                                          "CodiceFiscaleUtils.Validator_.html#.Validator.cfDayGender": {
                                                                                                            "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfDayGender",
                                                                                                            "tf": 1075
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              },
                                                                                              "t": {
                                                                                                "docs": {},
                                                                                                "e": {
                                                                                                  "docs": {},
                                                                                                  "g": {
                                                                                                    "docs": {},
                                                                                                    "e": {
                                                                                                      "docs": {},
                                                                                                      "n": {
                                                                                                        "docs": {},
                                                                                                        "d": {
                                                                                                          "docs": {
                                                                                                            "CodiceFiscaleUtils.Validator_.html#.Validator.cfDateGender": {
                                                                                                              "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfDateGender",
                                                                                                              "tf": 1075
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
                                                                                          "p": {
                                                                                            "docs": {},
                                                                                            "l": {
                                                                                              "docs": {},
                                                                                              "a": {
                                                                                                "docs": {},
                                                                                                "c": {
                                                                                                  "docs": {
                                                                                                    "CodiceFiscaleUtils.Validator_.html#.Validator.cfPlace": {
                                                                                                      "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfPlace",
                                                                                                      "tf": 1075
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
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
              "e": {
                "docs": {
                  "CodiceFiscaleUtils.Parser.html#.Parser.placeToCf": {
                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.placeToCf",
                    "tf": 8.333333333333332
                  }
                }
              }
            }
          },
          "l": {
            "docs": {},
            "a": {
              "docs": {},
              "s": {
                "docs": {},
                "s": {
                  "docs": {
                    "list_class.html": {
                      "ref": "list_class.html",
                      "tf": 635
                    },
                    "Belfiore.Belfiore.html": {
                      "ref": "Belfiore.Belfiore.html",
                      "tf": 110
                    },
                    "CodiceFiscaleUtils.Parser.html": {
                      "ref": "CodiceFiscaleUtils.Parser.html",
                      "tf": 110
                    },
                    "CodiceFiscaleUtils.Validator_.html": {
                      "ref": "CodiceFiscaleUtils.Validator_.html",
                      "tf": 110
                    }
                  }
                }
              }
            }
          },
          "f": {
            "docs": {
              "CodiceFiscaleUtils.Parser.html#.Parser.surnameToCf": {
                "ref": "CodiceFiscaleUtils.Parser.html#.Parser.surnameToCf",
                "tf": 12.5
              },
              "CodiceFiscaleUtils.Parser.html#.Parser.nameToCf": {
                "ref": "CodiceFiscaleUtils.Parser.html#.Parser.nameToCf",
                "tf": 12.5
              },
              "CodiceFiscaleUtils.Parser.html#.Parser.yearToCf": {
                "ref": "CodiceFiscaleUtils.Parser.html#.Parser.yearToCf",
                "tf": 12.5
              },
              "CodiceFiscaleUtils.Parser.html#.Parser.parseDate": {
                "ref": "CodiceFiscaleUtils.Parser.html#.Parser.parseDate",
                "tf": 6.25
              },
              "CodiceFiscaleUtils.Parser.html#.Parser.dateGenderToCf": {
                "ref": "CodiceFiscaleUtils.Parser.html#.Parser.dateGenderToCf",
                "tf": 6.25
              },
              "CodiceFiscaleUtils.Parser.html#.Parser.placeToCf": {
                "ref": "CodiceFiscaleUtils.Parser.html#.Parser.placeToCf",
                "tf": 6.25
              }
            },
            "d": {
              "docs": {},
              "e": {
                "docs": {},
                "o": {
                  "docs": {},
                  "m": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "c": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "d": {
                            "docs": {
                              "CodiceFiscaleUtils.Parser.html#.Parser.cfDeomocode": {
                                "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfDeomocode",
                                "tf": 75
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "a": {
                "docs": {},
                "y": {
                  "docs": {
                    "CodiceFiscaleUtils.Validator_.html#.Validator.cfDay": {
                      "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfDay",
                      "tf": 75
                    }
                  },
                  "g": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "d": {
                          "docs": {
                            "CodiceFiscaleUtils.Validator_.html#.Validator.cfDayGender": {
                              "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfDayGender",
                              "tf": 75
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "t": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "g": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "n": {
                          "docs": {},
                          "d": {
                            "docs": {
                              "CodiceFiscaleUtils.Validator_.html#.Validator.cfDateGender": {
                                "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfDateGender",
                                "tf": 75
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
            "t": {
              "docs": {},
              "o": {
                "docs": {},
                "s": {
                  "docs": {},
                  "u": {
                    "docs": {},
                    "r": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "m": {
                            "docs": {
                              "CodiceFiscaleUtils.Parser.html#.Parser.cfToSurname": {
                                "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToSurname",
                                "tf": 75
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "n": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "m": {
                      "docs": {
                        "CodiceFiscaleUtils.Parser.html#.Parser.cfToName": {
                          "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToName",
                          "tf": 75
                        }
                      }
                    }
                  }
                },
                "g": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "d": {
                        "docs": {
                          "CodiceFiscaleUtils.Parser.html#.Parser.cfToGender": {
                            "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToGender",
                            "tf": 75
                          }
                        }
                      }
                    }
                  }
                },
                "b": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "r": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "h": {
                          "docs": {},
                          "y": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "a": {
                                "docs": {},
                                "r": {
                                  "docs": {
                                    "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthYear": {
                                      "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthYear",
                                      "tf": 75
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "m": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "n": {
                                "docs": {},
                                "t": {
                                  "docs": {},
                                  "h": {
                                    "docs": {
                                      "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthMonth": {
                                        "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthMonth",
                                        "tf": 75
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "d": {
                            "docs": {
                              "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDate": {
                                "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDate",
                                "tf": 75
                              }
                            },
                            "a": {
                              "docs": {},
                              "y": {
                                "docs": {
                                  "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDay": {
                                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDay",
                                    "tf": 75
                                  }
                                }
                              }
                            }
                          },
                          "p": {
                            "docs": {},
                            "l": {
                              "docs": {},
                              "a": {
                                "docs": {},
                                "c": {
                                  "docs": {
                                    "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthPlace": {
                                      "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthPlace",
                                      "tf": 75
                                    }
                                  }
                                }
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
            "s": {
              "docs": {},
              "u": {
                "docs": {},
                "r": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "m": {
                        "docs": {
                          "CodiceFiscaleUtils.Validator_.html#.Validator.cfSurname": {
                            "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfSurname",
                            "tf": 75
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "n": {
              "docs": {},
              "a": {
                "docs": {},
                "m": {
                  "docs": {},
                  "e": {
                    "docs": {
                      "CodiceFiscaleUtils.Validator_.html#.Validator.cfName": {
                        "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfName",
                        "tf": 75
                      }
                    }
                  }
                }
              }
            },
            "y": {
              "docs": {},
              "e": {
                "docs": {},
                "a": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "CodiceFiscaleUtils.Validator_.html#.Validator.cfYear": {
                        "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfYear",
                        "tf": 75
                      }
                    }
                  }
                }
              }
            },
            "m": {
              "docs": {},
              "o": {
                "docs": {},
                "n": {
                  "docs": {},
                  "t": {
                    "docs": {},
                    "h": {
                      "docs": {
                        "CodiceFiscaleUtils.Validator_.html#.Validator.cfMonth": {
                          "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfMonth",
                          "tf": 75
                        }
                      }
                    }
                  }
                }
              }
            },
            "p": {
              "docs": {},
              "l": {
                "docs": {},
                "a": {
                  "docs": {},
                  "c": {
                    "docs": {},
                    "e": {
                      "docs": {
                        "CodiceFiscaleUtils.Validator_.html#.Validator.cfPlace": {
                          "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfPlace",
                          "tf": 75
                        }
                      }
                    }
                  }
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
                "t": {
                  "docs": {
                    "CodiceFiscaleUtils.Parser.html#.Parser.parseDate": {
                      "ref": "CodiceFiscaleUtils.Parser.html#.Parser.parseDate",
                      "tf": 6.25
                    },
                    "CodiceFiscaleUtils.Parser.html#.Parser.dateGenderToCf": {
                      "ref": "CodiceFiscaleUtils.Parser.html#.Parser.dateGenderToCf",
                      "tf": 6.25
                    },
                    "CodiceFiscaleUtils.Parser.html#.Parser.placeToCf": {
                      "ref": "CodiceFiscaleUtils.Parser.html#.Parser.placeToCf",
                      "tf": 6.25
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
          },
          "u": {
            "docs": {},
            "n": {
              "docs": {},
              "c": {
                "docs": {},
                "t": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "n": {
                        "docs": {
                          "CodiceFiscaleUtils.Parser.html#.Parser.cfDeomocode": {
                            "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfDeomocode",
                            "tf": 110
                          },
                          "CodiceFiscaleUtils.Parser.html#.Parser.cfToSurname": {
                            "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToSurname",
                            "tf": 110
                          },
                          "CodiceFiscaleUtils.Parser.html#.Parser.cfToName": {
                            "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToName",
                            "tf": 110
                          },
                          "CodiceFiscaleUtils.Parser.html#.Parser.cfToGender": {
                            "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToGender",
                            "tf": 110
                          },
                          "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthYear": {
                            "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthYear",
                            "tf": 110
                          },
                          "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthMonth": {
                            "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthMonth",
                            "tf": 110
                          },
                          "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDay": {
                            "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDay",
                            "tf": 110
                          },
                          "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDate": {
                            "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDate",
                            "tf": 110
                          },
                          "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthPlace": {
                            "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthPlace",
                            "tf": 110
                          },
                          "CodiceFiscaleUtils.Parser.html#.Parser.surnameToCf": {
                            "ref": "CodiceFiscaleUtils.Parser.html#.Parser.surnameToCf",
                            "tf": 110
                          },
                          "CodiceFiscaleUtils.Parser.html#.Parser.nameToCf": {
                            "ref": "CodiceFiscaleUtils.Parser.html#.Parser.nameToCf",
                            "tf": 110
                          },
                          "CodiceFiscaleUtils.Parser.html#.Parser.yearToCf": {
                            "ref": "CodiceFiscaleUtils.Parser.html#.Parser.yearToCf",
                            "tf": 110
                          },
                          "CodiceFiscaleUtils.Parser.html#.Parser.monthToCf": {
                            "ref": "CodiceFiscaleUtils.Parser.html#.Parser.monthToCf",
                            "tf": 110
                          },
                          "CodiceFiscaleUtils.Parser.html#.Parser.dayGenderToCf": {
                            "ref": "CodiceFiscaleUtils.Parser.html#.Parser.dayGenderToCf",
                            "tf": 110
                          },
                          "CodiceFiscaleUtils.Parser.html#.Parser.parseDate": {
                            "ref": "CodiceFiscaleUtils.Parser.html#.Parser.parseDate",
                            "tf": 110
                          },
                          "CodiceFiscaleUtils.Parser.html#.Parser.dateGenderToCf": {
                            "ref": "CodiceFiscaleUtils.Parser.html#.Parser.dateGenderToCf",
                            "tf": 110
                          },
                          "CodiceFiscaleUtils.Parser.html#.Parser.placeToCf": {
                            "ref": "CodiceFiscaleUtils.Parser.html#.Parser.placeToCf",
                            "tf": 110
                          },
                          "CodiceFiscaleUtils.Validator_.html#.Validator.cfSurname": {
                            "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfSurname",
                            "tf": 110
                          },
                          "CodiceFiscaleUtils.Validator_.html#.Validator.cfName": {
                            "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfName",
                            "tf": 110
                          },
                          "CodiceFiscaleUtils.Validator_.html#.Validator.cfYear": {
                            "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfYear",
                            "tf": 110
                          },
                          "CodiceFiscaleUtils.Validator_.html#.Validator.cfMonth": {
                            "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfMonth",
                            "tf": 110
                          },
                          "CodiceFiscaleUtils.Validator_.html#.Validator.cfDay": {
                            "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfDay",
                            "tf": 110
                          },
                          "CodiceFiscaleUtils.Validator_.html#.Validator.cfDayGender": {
                            "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfDayGender",
                            "tf": 110
                          },
                          "CodiceFiscaleUtils.Validator_.html#.Validator.cfDateGender": {
                            "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfDateGender",
                            "tf": 110
                          },
                          "CodiceFiscaleUtils.Validator_.html#.Validator.cfPlace": {
                            "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfPlace",
                            "tf": 110
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
            },
            "f": {
              "docs": {},
              "o": {
                "docs": {},
                "r": {
                  "docs": {},
                  "m": {
                    "docs": {
                      "CodiceFiscaleUtils.Parser.html#.Parser.cfDeomocode": {
                        "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfDeomocode",
                        "tf": 16.666666666666664
                      },
                      "CodiceFiscaleUtils.Parser.html#.Parser.cfToSurname": {
                        "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToSurname",
                        "tf": 16.666666666666664
                      },
                      "CodiceFiscaleUtils.Parser.html#.Parser.cfToName": {
                        "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToName",
                        "tf": 16.666666666666664
                      },
                      "CodiceFiscaleUtils.Parser.html#.Parser.cfToGender": {
                        "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToGender",
                        "tf": 16.666666666666664
                      },
                      "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthYear": {
                        "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthYear",
                        "tf": 12.5
                      },
                      "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthMonth": {
                        "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthMonth",
                        "tf": 12.5
                      },
                      "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDay": {
                        "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDay",
                        "tf": 12.5
                      },
                      "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDate": {
                        "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDate",
                        "tf": 12.5
                      },
                      "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthPlace": {
                        "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthPlace",
                        "tf": 12.5
                      },
                      "CodiceFiscaleUtils.Parser.html#.Parser.monthToCf": {
                        "ref": "CodiceFiscaleUtils.Parser.html#.Parser.monthToCf",
                        "tf": 16.666666666666664
                      },
                      "CodiceFiscaleUtils.Parser.html#.Parser.dayGenderToCf": {
                        "ref": "CodiceFiscaleUtils.Parser.html#.Parser.dayGenderToCf",
                        "tf": 16.666666666666664
                      },
                      "CodiceFiscaleUtils.Parser.html#.Parser.parseDate": {
                        "ref": "CodiceFiscaleUtils.Parser.html#.Parser.parseDate",
                        "tf": 6.25
                      },
                      "CodiceFiscaleUtils.Parser.html#.Parser.dateGenderToCf": {
                        "ref": "CodiceFiscaleUtils.Parser.html#.Parser.dateGenderToCf",
                        "tf": 6.25
                      },
                      "CodiceFiscaleUtils.Parser.html#.Parser.placeToCf": {
                        "ref": "CodiceFiscaleUtils.Parser.html#.Parser.placeToCf",
                        "tf": 6.25
                      }
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
                },
                "o": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "l": {
                      "docs": {},
                      "y": {
                        "docs": {},
                        "&": {
                          "docs": {},
                          "g": {
                            "docs": {},
                            "t": {
                              "docs": {
                                "CodiceFiscaleUtils.Parser.html#.Parser.OMOCODE_BITMAP": {
                                  "ref": "CodiceFiscaleUtils.Parser.html#.Parser.OMOCODE_BITMAP",
                                  "tf": 33.33333333333333
                                }
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
              "e": {
                "docs": {},
                "x": {
                  "docs": {},
                  "p": {
                    "docs": {
                      "CodiceFiscaleUtils.Validator_.html#.Validator.cfSurname": {
                        "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfSurname",
                        "tf": 35
                      },
                      "CodiceFiscaleUtils.Validator_.html#.Validator.cfName": {
                        "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfName",
                        "tf": 35
                      },
                      "CodiceFiscaleUtils.Validator_.html#.Validator.cfYear": {
                        "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfYear",
                        "tf": 35
                      },
                      "CodiceFiscaleUtils.Validator_.html#.Validator.cfMonth": {
                        "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfMonth",
                        "tf": 35
                      },
                      "CodiceFiscaleUtils.Validator_.html#.Validator.cfDay": {
                        "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfDay",
                        "tf": 35
                      },
                      "CodiceFiscaleUtils.Validator_.html#.Validator.cfDayGender": {
                        "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfDayGender",
                        "tf": 30
                      },
                      "CodiceFiscaleUtils.Validator_.html#.Validator.cfDateGender": {
                        "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfDateGender",
                        "tf": 30
                      },
                      "CodiceFiscaleUtils.Validator_.html#.Validator.cfPlace": {
                        "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfPlace",
                        "tf": 20
                      }
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
                          },
                          "list_class.html": {
                            "ref": "list_class.html",
                            "tf": 35
                          },
                          "list_module.html": {
                            "ref": "list_module.html",
                            "tf": 35
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "f": {
              "docs": {},
              "a": {
                "docs": {},
                "u": {
                  "docs": {},
                  "l": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "CodiceFiscaleUtils.Parser.html#.Parser.OMOCODE_BITMAP": {
                          "ref": "CodiceFiscaleUtils.Parser.html#.Parser.OMOCODE_BITMAP",
                          "tf": 16.666666666666664
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "y": {
              "docs": {
                "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDay": {
                  "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDay",
                  "tf": 12.5
                },
                "CodiceFiscaleUtils.Parser.html#.Parser.dayGenderToCf": {
                  "ref": "CodiceFiscaleUtils.Parser.html#.Parser.dayGenderToCf",
                  "tf": 36.666666666666664
                },
                "CodiceFiscaleUtils.Validator_.html#.Validator.cfDay": {
                  "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfDay",
                  "tf": 25
                },
                "CodiceFiscaleUtils.Validator_.html#.Validator.cfDayGender": {
                  "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfDayGender",
                  "tf": 20
                }
              },
              "g": {
                "docs": {},
                "e": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "d": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "r": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "c": {
                                "docs": {},
                                "f": {
                                  "docs": {
                                    "CodiceFiscaleUtils.Parser.html#.Parser.dayGenderToCf": {
                                      "ref": "CodiceFiscaleUtils.Parser.html#.Parser.dayGenderToCf",
                                      "tf": 75
                                    }
                                  }
                                }
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
            "t": {
              "docs": {},
              "e": {
                "docs": {
                  "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDate": {
                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDate",
                    "tf": 12.5
                  },
                  "CodiceFiscaleUtils.Parser.html#.Parser.parseDate": {
                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.parseDate",
                    "tf": 31.25
                  },
                  "CodiceFiscaleUtils.Parser.html#.Parser.dateGenderToCf": {
                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.dateGenderToCf",
                    "tf": 26.25
                  },
                  "CodiceFiscaleUtils.Parser.html#.Parser.placeToCf": {
                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.placeToCf",
                    "tf": 22.916666666666664
                  },
                  "CodiceFiscaleUtils.Validator_.html#.Validator.cfDateGender": {
                    "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfDateGender",
                    "tf": 20
                  },
                  "CodiceFiscaleUtils.Validator_.html#.Validator.cfPlace": {
                    "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfPlace",
                    "tf": 20
                  }
                },
                "|": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "u": {
                      "docs": {},
                      "l": {
                        "docs": {
                          "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDate": {
                            "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDate",
                            "tf": 25
                          },
                          "CodiceFiscaleUtils.Parser.html#.Parser.parseDate": {
                            "ref": "CodiceFiscaleUtils.Parser.html#.Parser.parseDate",
                            "tf": 25
                          }
                        }
                      }
                    }
                  }
                },
                "/": {
                  "docs": {},
                  "g": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "d": {
                          "docs": {
                            "CodiceFiscaleUtils.Parser.html#.Parser.parseDate": {
                              "ref": "CodiceFiscaleUtils.Parser.html#.Parser.parseDate",
                              "tf": 6.25
                            },
                            "CodiceFiscaleUtils.Parser.html#.Parser.dateGenderToCf": {
                              "ref": "CodiceFiscaleUtils.Parser.html#.Parser.dateGenderToCf",
                              "tf": 6.25
                            },
                            "CodiceFiscaleUtils.Parser.html#.Parser.placeToCf": {
                              "ref": "CodiceFiscaleUtils.Parser.html#.Parser.placeToCf",
                              "tf": 6.25
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "g": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "d": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "r": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "c": {
                                  "docs": {},
                                  "f": {
                                    "docs": {
                                      "CodiceFiscaleUtils.Parser.html#.Parser.dateGenderToCf": {
                                        "ref": "CodiceFiscaleUtils.Parser.html#.Parser.dateGenderToCf",
                                        "tf": 75
                                      }
                                    }
                                  }
                                }
                              }
                            }
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
          },
          "e": {
            "docs": {},
            "n": {
              "docs": {},
              "d": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "CodiceFiscaleUtils.Parser.html#.Parser.cfToGender": {
                        "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToGender",
                        "tf": 16.666666666666664
                      },
                      "CodiceFiscaleUtils.Parser.html#.Parser.dayGenderToCf": {
                        "ref": "CodiceFiscaleUtils.Parser.html#.Parser.dayGenderToCf",
                        "tf": 20
                      },
                      "CodiceFiscaleUtils.Parser.html#.Parser.parseDate": {
                        "ref": "CodiceFiscaleUtils.Parser.html#.Parser.parseDate",
                        "tf": 6.25
                      },
                      "CodiceFiscaleUtils.Parser.html#.Parser.dateGenderToCf": {
                        "ref": "CodiceFiscaleUtils.Parser.html#.Parser.dateGenderToCf",
                        "tf": 26.25
                      },
                      "CodiceFiscaleUtils.Parser.html#.Parser.placeToCf": {
                        "ref": "CodiceFiscaleUtils.Parser.html#.Parser.placeToCf",
                        "tf": 6.25
                      },
                      "CodiceFiscaleUtils.Validator_.html#.Validator.cfDayGender": {
                        "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfDayGender",
                        "tf": 20
                      },
                      "CodiceFiscaleUtils.Validator_.html#.Validator.cfDateGender": {
                        "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfDateGender",
                        "tf": 20
                      }
                    }
                  }
                }
              },
              "e": {
                "docs": {},
                "r": {
                  "docs": {
                    "CodiceFiscaleUtils.Validator_.html#.Validator.cfSurname": {
                      "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfSurname",
                      "tf": 10
                    },
                    "CodiceFiscaleUtils.Validator_.html#.Validator.cfName": {
                      "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfName",
                      "tf": 10
                    },
                    "CodiceFiscaleUtils.Validator_.html#.Validator.cfYear": {
                      "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfYear",
                      "tf": 10
                    },
                    "CodiceFiscaleUtils.Validator_.html#.Validator.cfMonth": {
                      "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfMonth",
                      "tf": 10
                    },
                    "CodiceFiscaleUtils.Validator_.html#.Validator.cfDay": {
                      "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfDay",
                      "tf": 10
                    },
                    "CodiceFiscaleUtils.Validator_.html#.Validator.cfDayGender": {
                      "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfDayGender",
                      "tf": 10
                    },
                    "CodiceFiscaleUtils.Validator_.html#.Validator.cfDateGender": {
                      "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfDateGender",
                      "tf": 10
                    }
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "v": {
              "docs": {},
              "e": {
                "docs": {},
                "n": {
                  "docs": {
                    "CodiceFiscaleUtils.Validator_.html#.Validator.cfSurname": {
                      "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfSurname",
                      "tf": 10
                    },
                    "CodiceFiscaleUtils.Validator_.html#.Validator.cfName": {
                      "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfName",
                      "tf": 10
                    },
                    "CodiceFiscaleUtils.Validator_.html#.Validator.cfYear": {
                      "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfYear",
                      "tf": 10
                    },
                    "CodiceFiscaleUtils.Validator_.html#.Validator.cfMonth": {
                      "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfMonth",
                      "tf": 10
                    },
                    "CodiceFiscaleUtils.Validator_.html#.Validator.cfDay": {
                      "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfDay",
                      "tf": 10
                    },
                    "CodiceFiscaleUtils.Validator_.html#.Validator.cfDayGender": {
                      "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfDayGender",
                      "tf": 10
                    },
                    "CodiceFiscaleUtils.Validator_.html#.Validator.cfDateGender": {
                      "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfDateGender",
                      "tf": 10
                    }
                  }
                }
              }
            }
          }
        },
        "l": {
          "docs": {},
          "i": {
            "docs": {},
            "s": {
              "docs": {},
              "t": {
                "docs": {
                  "list_class.html": {
                    "ref": "list_class.html",
                    "tf": 110
                  },
                  "list_module.html": {
                    "ref": "list_module.html",
                    "tf": 110
                  }
                },
                ":": {
                  "docs": {},
                  "c": {
                    "docs": {},
                    "l": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "s": {
                          "docs": {},
                          "s": {
                            "docs": {
                              "list_class.html": {
                                "ref": "list_class.html",
                                "tf": 1300
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "m": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "d": {
                        "docs": {},
                        "u": {
                          "docs": {},
                          "l": {
                            "docs": {
                              "list_module.html": {
                                "ref": "list_module.html",
                                "tf": 1300
                              }
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
          "t": {
            "docs": {},
            ";": {
              "docs": {},
              "s": {
                "docs": {},
                "t": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "c": {
                          "docs": {
                            "CodiceFiscaleUtils.Parser.html#.Parser.OMOCODE_BITMAP": {
                              "ref": "CodiceFiscaleUtils.Parser.html#.Parser.OMOCODE_BITMAP",
                              "tf": 33.33333333333333
                            }
                          },
                          "&": {
                            "docs": {},
                            "g": {
                              "docs": {},
                              "t": {
                                "docs": {
                                  "CodiceFiscaleUtils.Parser.html#.Parser.cfDeomocode": {
                                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfDeomocode",
                                    "tf": 25
                                  },
                                  "CodiceFiscaleUtils.Parser.html#.Parser.cfToSurname": {
                                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToSurname",
                                    "tf": 25
                                  },
                                  "CodiceFiscaleUtils.Parser.html#.Parser.cfToName": {
                                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToName",
                                    "tf": 25
                                  },
                                  "CodiceFiscaleUtils.Parser.html#.Parser.cfToGender": {
                                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToGender",
                                    "tf": 25
                                  },
                                  "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthYear": {
                                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthYear",
                                    "tf": 25
                                  },
                                  "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthMonth": {
                                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthMonth",
                                    "tf": 25
                                  },
                                  "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDay": {
                                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDay",
                                    "tf": 25
                                  },
                                  "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDate": {
                                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDate",
                                    "tf": 25
                                  },
                                  "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthPlace": {
                                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthPlace",
                                    "tf": 25
                                  },
                                  "CodiceFiscaleUtils.Parser.html#.Parser.surnameToCf": {
                                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.surnameToCf",
                                    "tf": 25
                                  },
                                  "CodiceFiscaleUtils.Parser.html#.Parser.nameToCf": {
                                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.nameToCf",
                                    "tf": 25
                                  },
                                  "CodiceFiscaleUtils.Parser.html#.Parser.yearToCf": {
                                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.yearToCf",
                                    "tf": 25
                                  },
                                  "CodiceFiscaleUtils.Parser.html#.Parser.monthToCf": {
                                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.monthToCf",
                                    "tf": 25
                                  },
                                  "CodiceFiscaleUtils.Parser.html#.Parser.dayGenderToCf": {
                                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.dayGenderToCf",
                                    "tf": 20
                                  },
                                  "CodiceFiscaleUtils.Parser.html#.Parser.parseDate": {
                                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.parseDate",
                                    "tf": 25
                                  },
                                  "CodiceFiscaleUtils.Parser.html#.Parser.dateGenderToCf": {
                                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.dateGenderToCf",
                                    "tf": 20
                                  },
                                  "CodiceFiscaleUtils.Parser.html#.Parser.placeToCf": {
                                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.placeToCf",
                                    "tf": 20
                                  },
                                  "CodiceFiscaleUtils.Validator_.html#.Validator.cfSurname": {
                                    "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfSurname",
                                    "tf": 25
                                  },
                                  "CodiceFiscaleUtils.Validator_.html#.Validator.cfName": {
                                    "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfName",
                                    "tf": 25
                                  },
                                  "CodiceFiscaleUtils.Validator_.html#.Validator.cfYear": {
                                    "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfYear",
                                    "tf": 25
                                  },
                                  "CodiceFiscaleUtils.Validator_.html#.Validator.cfMonth": {
                                    "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfMonth",
                                    "tf": 25
                                  },
                                  "CodiceFiscaleUtils.Validator_.html#.Validator.cfDay": {
                                    "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfDay",
                                    "tf": 25
                                  },
                                  "CodiceFiscaleUtils.Validator_.html#.Validator.cfDayGender": {
                                    "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfDayGender",
                                    "tf": 20
                                  },
                                  "CodiceFiscaleUtils.Validator_.html#.Validator.cfDateGender": {
                                    "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfDateGender",
                                    "tf": 20
                                  },
                                  "CodiceFiscaleUtils.Validator_.html#.Validator.cfPlace": {
                                    "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfPlace",
                                    "tf": 20
                                  }
                                }
                              }
                            }
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
        "m": {
          "docs": {},
          "o": {
            "docs": {},
            "d": {
              "docs": {},
              "u": {
                "docs": {},
                "l": {
                  "docs": {
                    "list_module.html": {
                      "ref": "list_module.html",
                      "tf": 635
                    },
                    "module-CodiceFiscaleUtils.html": {
                      "ref": "module-CodiceFiscaleUtils.html",
                      "tf": 110
                    }
                  },
                  "e": {
                    "docs": {},
                    ":": {
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
                                "docs": {},
                                "e": {
                                  "docs": {},
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
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "u": {
                                                  "docs": {},
                                                  "t": {
                                                    "docs": {},
                                                    "i": {
                                                      "docs": {},
                                                      "l": {
                                                        "docs": {
                                                          "module-CodiceFiscaleUtils.html": {
                                                            "ref": "module-CodiceFiscaleUtils.html",
                                                            "tf": 1300
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
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
            "n": {
              "docs": {},
              "t": {
                "docs": {},
                "h": {
                  "docs": {
                    "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthMonth": {
                      "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthMonth",
                      "tf": 12.5
                    },
                    "CodiceFiscaleUtils.Parser.html#.Parser.monthToCf": {
                      "ref": "CodiceFiscaleUtils.Parser.html#.Parser.monthToCf",
                      "tf": 41.666666666666664
                    },
                    "CodiceFiscaleUtils.Validator_.html#.Validator.cfMonth": {
                      "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfMonth",
                      "tf": 35
                    }
                  },
                  "t": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "c": {
                        "docs": {},
                        "f": {
                          "docs": {
                            "CodiceFiscaleUtils.Parser.html#.Parser.monthToCf": {
                              "ref": "CodiceFiscaleUtils.Parser.html#.Parser.monthToCf",
                              "tf": 75
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
          "e": {
            "docs": {},
            "m": {
              "docs": {},
              "b": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "CodiceFiscaleUtils.Parser.html#.Parser.OMOCODE_BITMAP": {
                        "ref": "CodiceFiscaleUtils.Parser.html#.Parser.OMOCODE_BITMAP",
                        "tf": 110
                      }
                    }
                  }
                }
              }
            }
          },
          "'": {
            "docs": {},
            "|": {
              "docs": {},
              "'": {
                "docs": {},
                "f": {
                  "docs": {},
                  "'": {
                    "docs": {},
                    "|": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "u": {
                          "docs": {},
                          "l": {
                            "docs": {},
                            "l": {
                              "docs": {
                                "CodiceFiscaleUtils.Parser.html#.Parser.cfToGender": {
                                  "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToGender",
                                  "tf": 25
                                }
                              }
                            }
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
        "b": {
          "docs": {},
          "e": {
            "docs": {},
            "l": {
              "docs": {},
              "f": {
                "docs": {},
                "i": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "r": {
                      "docs": {
                        "Belfiore.Belfiore.html": {
                          "ref": "Belfiore.Belfiore.html",
                          "tf": 750
                        },
                        "CodiceFiscaleUtils.Parser.html#.Parser.placeToCf": {
                          "ref": "CodiceFiscaleUtils.Parser.html#.Parser.placeToCf",
                          "tf": 8.333333333333332
                        }
                      },
                      "e": {
                        "docs": {},
                        ".": {
                          "docs": {},
                          "b": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "l": {
                                "docs": {},
                                "f": {
                                  "docs": {},
                                  "i": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "r": {
                                        "docs": {
                                          "Belfiore.Belfiore.html": {
                                            "ref": "Belfiore.Belfiore.html",
                                            "tf": 1150
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
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
          "i": {
            "docs": {},
            "t": {
              "docs": {},
              "m": {
                "docs": {},
                "a": {
                  "docs": {},
                  "p": {
                    "docs": {
                      "CodiceFiscaleUtils.Parser.html#.Parser.OMOCODE_BITMAP": {
                        "ref": "CodiceFiscaleUtils.Parser.html#.Parser.OMOCODE_BITMAP",
                        "tf": 16.666666666666664
                      }
                    }
                  }
                }
              }
            },
            "r": {
              "docs": {},
              "t": {
                "docs": {},
                "h": {
                  "docs": {
                    "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthYear": {
                      "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthYear",
                      "tf": 12.5
                    },
                    "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthMonth": {
                      "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthMonth",
                      "tf": 12.5
                    },
                    "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDay": {
                      "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDay",
                      "tf": 12.5
                    },
                    "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDate": {
                      "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDate",
                      "tf": 12.5
                    },
                    "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthPlace": {
                      "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthPlace",
                      "tf": 12.5
                    }
                  }
                }
              }
            }
          }
        },
        "p": {
          "docs": {},
          "a": {
            "docs": {},
            "r": {
              "docs": {},
              "s": {
                "docs": {
                  "CodiceFiscaleUtils.Parser.html#.Parser.cfDeomocode": {
                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfDeomocode",
                    "tf": 16.666666666666664
                  },
                  "CodiceFiscaleUtils.Parser.html#.Parser.cfToSurname": {
                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToSurname",
                    "tf": 16.666666666666664
                  },
                  "CodiceFiscaleUtils.Parser.html#.Parser.cfToName": {
                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToName",
                    "tf": 16.666666666666664
                  },
                  "CodiceFiscaleUtils.Parser.html#.Parser.cfToGender": {
                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToGender",
                    "tf": 16.666666666666664
                  },
                  "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthYear": {
                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthYear",
                    "tf": 12.5
                  },
                  "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthMonth": {
                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthMonth",
                    "tf": 12.5
                  },
                  "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDay": {
                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDay",
                    "tf": 12.5
                  },
                  "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDate": {
                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDate",
                    "tf": 12.5
                  },
                  "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthPlace": {
                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthPlace",
                    "tf": 12.5
                  },
                  "CodiceFiscaleUtils.Parser.html#.Parser.surnameToCf": {
                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.surnameToCf",
                    "tf": 12.5
                  },
                  "CodiceFiscaleUtils.Parser.html#.Parser.nameToCf": {
                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.nameToCf",
                    "tf": 12.5
                  },
                  "CodiceFiscaleUtils.Parser.html#.Parser.yearToCf": {
                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.yearToCf",
                    "tf": 12.5
                  },
                  "CodiceFiscaleUtils.Parser.html#.Parser.monthToCf": {
                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.monthToCf",
                    "tf": 16.666666666666664
                  },
                  "CodiceFiscaleUtils.Parser.html#.Parser.dayGenderToCf": {
                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.dayGenderToCf",
                    "tf": 16.666666666666664
                  },
                  "CodiceFiscaleUtils.Parser.html#.Parser.parseDate": {
                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.parseDate",
                    "tf": 6.25
                  },
                  "CodiceFiscaleUtils.Parser.html#.Parser.dateGenderToCf": {
                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.dateGenderToCf",
                    "tf": 6.25
                  },
                  "CodiceFiscaleUtils.Parser.html#.Parser.placeToCf": {
                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.placeToCf",
                    "tf": 8.333333333333332
                  }
                },
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "CodiceFiscaleUtils.Parser.html": {
                        "ref": "CodiceFiscaleUtils.Parser.html",
                        "tf": 750
                      }
                    },
                    ".": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "m": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "c": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "d": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "_": {
                                      "docs": {},
                                      "b": {
                                        "docs": {},
                                        "i": {
                                          "docs": {},
                                          "t": {
                                            "docs": {},
                                            "m": {
                                              "docs": {},
                                              "a": {
                                                "docs": {},
                                                "p": {
                                                  "docs": {
                                                    "CodiceFiscaleUtils.Parser.html#.Parser.OMOCODE_BITMAP": {
                                                      "ref": "CodiceFiscaleUtils.Parser.html#.Parser.OMOCODE_BITMAP",
                                                      "tf": 608.3333333333334
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
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
                      "p": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "r": {
                            "docs": {},
                            "s": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "r": {
                                  "docs": {},
                                  ".": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "m": {
                                        "docs": {},
                                        "o": {
                                          "docs": {},
                                          "c": {
                                            "docs": {},
                                            "o": {
                                              "docs": {},
                                              "d": {
                                                "docs": {},
                                                "e": {
                                                  "docs": {},
                                                  "_": {
                                                    "docs": {},
                                                    "b": {
                                                      "docs": {},
                                                      "i": {
                                                        "docs": {},
                                                        "t": {
                                                          "docs": {},
                                                          "m": {
                                                            "docs": {},
                                                            "a": {
                                                              "docs": {},
                                                              "p": {
                                                                "docs": {
                                                                  "CodiceFiscaleUtils.Parser.html#.Parser.OMOCODE_BITMAP": {
                                                                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.OMOCODE_BITMAP",
                                                                    "tf": 75
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
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
                                    "c": {
                                      "docs": {},
                                      "f": {
                                        "docs": {},
                                        "d": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "o": {
                                              "docs": {},
                                              "m": {
                                                "docs": {},
                                                "o": {
                                                  "docs": {},
                                                  "c": {
                                                    "docs": {},
                                                    "o": {
                                                      "docs": {},
                                                      "d": {
                                                        "docs": {
                                                          "CodiceFiscaleUtils.Parser.html#.Parser.cfDeomocode": {
                                                            "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfDeomocode",
                                                            "tf": 75
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
                                        "t": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "s": {
                                              "docs": {},
                                              "u": {
                                                "docs": {},
                                                "r": {
                                                  "docs": {},
                                                  "n": {
                                                    "docs": {},
                                                    "a": {
                                                      "docs": {},
                                                      "m": {
                                                        "docs": {
                                                          "CodiceFiscaleUtils.Parser.html#.Parser.cfToSurname": {
                                                            "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToSurname",
                                                            "tf": 75
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            "n": {
                                              "docs": {},
                                              "a": {
                                                "docs": {},
                                                "m": {
                                                  "docs": {
                                                    "CodiceFiscaleUtils.Parser.html#.Parser.cfToName": {
                                                      "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToName",
                                                      "tf": 75
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            "g": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "n": {
                                                  "docs": {},
                                                  "d": {
                                                    "docs": {
                                                      "CodiceFiscaleUtils.Parser.html#.Parser.cfToGender": {
                                                        "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToGender",
                                                        "tf": 75
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            "b": {
                                              "docs": {},
                                              "i": {
                                                "docs": {},
                                                "r": {
                                                  "docs": {},
                                                  "t": {
                                                    "docs": {},
                                                    "h": {
                                                      "docs": {},
                                                      "y": {
                                                        "docs": {},
                                                        "e": {
                                                          "docs": {},
                                                          "a": {
                                                            "docs": {},
                                                            "r": {
                                                              "docs": {
                                                                "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthYear": {
                                                                  "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthYear",
                                                                  "tf": 75
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      },
                                                      "m": {
                                                        "docs": {},
                                                        "o": {
                                                          "docs": {},
                                                          "n": {
                                                            "docs": {},
                                                            "t": {
                                                              "docs": {},
                                                              "h": {
                                                                "docs": {
                                                                  "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthMonth": {
                                                                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthMonth",
                                                                    "tf": 75
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      },
                                                      "d": {
                                                        "docs": {
                                                          "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDate": {
                                                            "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDate",
                                                            "tf": 75
                                                          }
                                                        },
                                                        "a": {
                                                          "docs": {},
                                                          "y": {
                                                            "docs": {
                                                              "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDay": {
                                                                "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDay",
                                                                "tf": 75
                                                              }
                                                            }
                                                          }
                                                        }
                                                      },
                                                      "p": {
                                                        "docs": {},
                                                        "l": {
                                                          "docs": {},
                                                          "a": {
                                                            "docs": {},
                                                            "c": {
                                                              "docs": {
                                                                "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthPlace": {
                                                                  "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthPlace",
                                                                  "tf": 75
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
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
                                    "s": {
                                      "docs": {},
                                      "u": {
                                        "docs": {},
                                        "r": {
                                          "docs": {},
                                          "n": {
                                            "docs": {},
                                            "a": {
                                              "docs": {},
                                              "m": {
                                                "docs": {},
                                                "e": {
                                                  "docs": {},
                                                  "t": {
                                                    "docs": {},
                                                    "o": {
                                                      "docs": {},
                                                      "c": {
                                                        "docs": {},
                                                        "f": {
                                                          "docs": {
                                                            "CodiceFiscaleUtils.Parser.html#.Parser.surnameToCf": {
                                                              "ref": "CodiceFiscaleUtils.Parser.html#.Parser.surnameToCf",
                                                              "tf": 75
                                                            }
                                                          }
                                                        }
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
                                    "n": {
                                      "docs": {},
                                      "a": {
                                        "docs": {},
                                        "m": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "t": {
                                              "docs": {},
                                              "o": {
                                                "docs": {},
                                                "c": {
                                                  "docs": {},
                                                  "f": {
                                                    "docs": {
                                                      "CodiceFiscaleUtils.Parser.html#.Parser.nameToCf": {
                                                        "ref": "CodiceFiscaleUtils.Parser.html#.Parser.nameToCf",
                                                        "tf": 75
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
                                    "y": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "a": {
                                          "docs": {},
                                          "r": {
                                            "docs": {},
                                            "t": {
                                              "docs": {},
                                              "o": {
                                                "docs": {},
                                                "c": {
                                                  "docs": {},
                                                  "f": {
                                                    "docs": {
                                                      "CodiceFiscaleUtils.Parser.html#.Parser.yearToCf": {
                                                        "ref": "CodiceFiscaleUtils.Parser.html#.Parser.yearToCf",
                                                        "tf": 75
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
                                    "m": {
                                      "docs": {},
                                      "o": {
                                        "docs": {},
                                        "n": {
                                          "docs": {},
                                          "t": {
                                            "docs": {},
                                            "h": {
                                              "docs": {},
                                              "t": {
                                                "docs": {},
                                                "o": {
                                                  "docs": {},
                                                  "c": {
                                                    "docs": {},
                                                    "f": {
                                                      "docs": {
                                                        "CodiceFiscaleUtils.Parser.html#.Parser.monthToCf": {
                                                          "ref": "CodiceFiscaleUtils.Parser.html#.Parser.monthToCf",
                                                          "tf": 75
                                                        }
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
                                    "d": {
                                      "docs": {},
                                      "a": {
                                        "docs": {},
                                        "y": {
                                          "docs": {},
                                          "g": {
                                            "docs": {},
                                            "e": {
                                              "docs": {},
                                              "n": {
                                                "docs": {},
                                                "d": {
                                                  "docs": {},
                                                  "e": {
                                                    "docs": {},
                                                    "r": {
                                                      "docs": {},
                                                      "t": {
                                                        "docs": {},
                                                        "o": {
                                                          "docs": {},
                                                          "c": {
                                                            "docs": {},
                                                            "f": {
                                                              "docs": {
                                                                "CodiceFiscaleUtils.Parser.html#.Parser.dayGenderToCf": {
                                                                  "ref": "CodiceFiscaleUtils.Parser.html#.Parser.dayGenderToCf",
                                                                  "tf": 75
                                                                }
                                                              }
                                                            }
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
                                        "t": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "g": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "n": {
                                                  "docs": {},
                                                  "d": {
                                                    "docs": {},
                                                    "e": {
                                                      "docs": {},
                                                      "r": {
                                                        "docs": {},
                                                        "t": {
                                                          "docs": {},
                                                          "o": {
                                                            "docs": {},
                                                            "c": {
                                                              "docs": {},
                                                              "f": {
                                                                "docs": {
                                                                  "CodiceFiscaleUtils.Parser.html#.Parser.dateGenderToCf": {
                                                                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.dateGenderToCf",
                                                                    "tf": 75
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
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
                                    "p": {
                                      "docs": {},
                                      "a": {
                                        "docs": {},
                                        "r": {
                                          "docs": {},
                                          "s": {
                                            "docs": {},
                                            "e": {
                                              "docs": {},
                                              "d": {
                                                "docs": {
                                                  "CodiceFiscaleUtils.Parser.html#.Parser.parseDate": {
                                                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.parseDate",
                                                    "tf": 75
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "l": {
                                        "docs": {},
                                        "a": {
                                          "docs": {},
                                          "c": {
                                            "docs": {},
                                            "e": {
                                              "docs": {},
                                              "t": {
                                                "docs": {},
                                                "o": {
                                                  "docs": {},
                                                  "c": {
                                                    "docs": {},
                                                    "f": {
                                                      "docs": {
                                                        "CodiceFiscaleUtils.Parser.html#.Parser.placeToCf": {
                                                          "ref": "CodiceFiscaleUtils.Parser.html#.Parser.placeToCf",
                                                          "tf": 75
                                                        }
                                                      }
                                                    }
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
                                "d": {
                                  "docs": {
                                    "CodiceFiscaleUtils.Parser.html#.Parser.parseDate": {
                                      "ref": "CodiceFiscaleUtils.Parser.html#.Parser.parseDate",
                                      "tf": 600
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "l": {
                          "docs": {},
                          "a": {
                            "docs": {},
                            "c": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "t": {
                                  "docs": {},
                                  "o": {
                                    "docs": {},
                                    "c": {
                                      "docs": {},
                                      "f": {
                                        "docs": {
                                          "CodiceFiscaleUtils.Parser.html#.Parser.placeToCf": {
                                            "ref": "CodiceFiscaleUtils.Parser.html#.Parser.placeToCf",
                                            "tf": 595
                                          }
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
                      "c": {
                        "docs": {},
                        "f": {
                          "docs": {},
                          "d": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "m": {
                                  "docs": {},
                                  "o": {
                                    "docs": {},
                                    "c": {
                                      "docs": {},
                                      "o": {
                                        "docs": {},
                                        "d": {
                                          "docs": {
                                            "CodiceFiscaleUtils.Parser.html#.Parser.cfDeomocode": {
                                              "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfDeomocode",
                                              "tf": 600
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
                          "t": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "s": {
                                "docs": {},
                                "u": {
                                  "docs": {},
                                  "r": {
                                    "docs": {},
                                    "n": {
                                      "docs": {},
                                      "a": {
                                        "docs": {},
                                        "m": {
                                          "docs": {
                                            "CodiceFiscaleUtils.Parser.html#.Parser.cfToSurname": {
                                              "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToSurname",
                                              "tf": 600
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "n": {
                                "docs": {},
                                "a": {
                                  "docs": {},
                                  "m": {
                                    "docs": {
                                      "CodiceFiscaleUtils.Parser.html#.Parser.cfToName": {
                                        "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToName",
                                        "tf": 600
                                      }
                                    }
                                  }
                                }
                              },
                              "g": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "n": {
                                    "docs": {},
                                    "d": {
                                      "docs": {
                                        "CodiceFiscaleUtils.Parser.html#.Parser.cfToGender": {
                                          "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToGender",
                                          "tf": 600
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "b": {
                                "docs": {},
                                "i": {
                                  "docs": {},
                                  "r": {
                                    "docs": {},
                                    "t": {
                                      "docs": {},
                                      "h": {
                                        "docs": {},
                                        "y": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "a": {
                                              "docs": {},
                                              "r": {
                                                "docs": {
                                                  "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthYear": {
                                                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthYear",
                                                    "tf": 600
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "m": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "n": {
                                              "docs": {},
                                              "t": {
                                                "docs": {},
                                                "h": {
                                                  "docs": {
                                                    "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthMonth": {
                                                      "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthMonth",
                                                      "tf": 600
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "d": {
                                          "docs": {
                                            "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDate": {
                                              "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDate",
                                              "tf": 600
                                            }
                                          },
                                          "a": {
                                            "docs": {},
                                            "y": {
                                              "docs": {
                                                "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDay": {
                                                  "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDay",
                                                  "tf": 600
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "p": {
                                          "docs": {},
                                          "l": {
                                            "docs": {},
                                            "a": {
                                              "docs": {},
                                              "c": {
                                                "docs": {
                                                  "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthPlace": {
                                                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthPlace",
                                                    "tf": 600
                                                  }
                                                }
                                              }
                                            }
                                          }
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
                      "s": {
                        "docs": {},
                        "u": {
                          "docs": {},
                          "r": {
                            "docs": {},
                            "n": {
                              "docs": {},
                              "a": {
                                "docs": {},
                                "m": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "t": {
                                      "docs": {},
                                      "o": {
                                        "docs": {},
                                        "c": {
                                          "docs": {},
                                          "f": {
                                            "docs": {
                                              "CodiceFiscaleUtils.Parser.html#.Parser.surnameToCf": {
                                                "ref": "CodiceFiscaleUtils.Parser.html#.Parser.surnameToCf",
                                                "tf": 600
                                              }
                                            }
                                          }
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
                      "n": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "m": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "t": {
                                "docs": {},
                                "o": {
                                  "docs": {},
                                  "c": {
                                    "docs": {},
                                    "f": {
                                      "docs": {
                                        "CodiceFiscaleUtils.Parser.html#.Parser.nameToCf": {
                                          "ref": "CodiceFiscaleUtils.Parser.html#.Parser.nameToCf",
                                          "tf": 600
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
                      "y": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "a": {
                            "docs": {},
                            "r": {
                              "docs": {},
                              "t": {
                                "docs": {},
                                "o": {
                                  "docs": {},
                                  "c": {
                                    "docs": {},
                                    "f": {
                                      "docs": {
                                        "CodiceFiscaleUtils.Parser.html#.Parser.yearToCf": {
                                          "ref": "CodiceFiscaleUtils.Parser.html#.Parser.yearToCf",
                                          "tf": 600
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
                      "m": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "n": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              "h": {
                                "docs": {},
                                "t": {
                                  "docs": {},
                                  "o": {
                                    "docs": {},
                                    "c": {
                                      "docs": {},
                                      "f": {
                                        "docs": {
                                          "CodiceFiscaleUtils.Parser.html#.Parser.monthToCf": {
                                            "ref": "CodiceFiscaleUtils.Parser.html#.Parser.monthToCf",
                                            "tf": 600
                                          }
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
                      "d": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "y": {
                            "docs": {},
                            "g": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "n": {
                                  "docs": {},
                                  "d": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "r": {
                                        "docs": {},
                                        "t": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "c": {
                                              "docs": {},
                                              "f": {
                                                "docs": {
                                                  "CodiceFiscaleUtils.Parser.html#.Parser.dayGenderToCf": {
                                                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.dayGenderToCf",
                                                    "tf": 595
                                                  }
                                                }
                                              }
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
                          "t": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "g": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "n": {
                                    "docs": {},
                                    "d": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "r": {
                                          "docs": {},
                                          "t": {
                                            "docs": {},
                                            "o": {
                                              "docs": {},
                                              "c": {
                                                "docs": {},
                                                "f": {
                                                  "docs": {
                                                    "CodiceFiscaleUtils.Parser.html#.Parser.dateGenderToCf": {
                                                      "ref": "CodiceFiscaleUtils.Parser.html#.Parser.dateGenderToCf",
                                                      "tf": 595
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
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
                  "d": {
                    "docs": {
                      "CodiceFiscaleUtils.Parser.html#.Parser.parseDate": {
                        "ref": "CodiceFiscaleUtils.Parser.html#.Parser.parseDate",
                        "tf": 75
                      }
                    }
                  }
                }
              },
              "t": {
                "docs": {
                  "CodiceFiscaleUtils.Parser.html#.Parser.surnameToCf": {
                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.surnameToCf",
                    "tf": 12.5
                  },
                  "CodiceFiscaleUtils.Parser.html#.Parser.nameToCf": {
                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.nameToCf",
                    "tf": 12.5
                  },
                  "CodiceFiscaleUtils.Parser.html#.Parser.yearToCf": {
                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.yearToCf",
                    "tf": 12.5
                  },
                  "CodiceFiscaleUtils.Parser.html#.Parser.parseDate": {
                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.parseDate",
                    "tf": 6.25
                  },
                  "CodiceFiscaleUtils.Parser.html#.Parser.dateGenderToCf": {
                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.dateGenderToCf",
                    "tf": 6.25
                  },
                  "CodiceFiscaleUtils.Parser.html#.Parser.placeToCf": {
                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.placeToCf",
                    "tf": 6.25
                  }
                }
              }
            }
          },
          "l": {
            "docs": {},
            "a": {
              "docs": {},
              "c": {
                "docs": {},
                "e": {
                  "docs": {
                    "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthPlace": {
                      "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthPlace",
                      "tf": 12.5
                    },
                    "CodiceFiscaleUtils.Parser.html#.Parser.placeToCf": {
                      "ref": "CodiceFiscaleUtils.Parser.html#.Parser.placeToCf",
                      "tf": 8.333333333333332
                    }
                  },
                  "t": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "c": {
                        "docs": {},
                        "f": {
                          "docs": {
                            "CodiceFiscaleUtils.Parser.html#.Parser.placeToCf": {
                              "ref": "CodiceFiscaleUtils.Parser.html#.Parser.placeToCf",
                              "tf": 75
                            }
                          }
                        }
                      }
                    }
                  },
                  "n": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "m": {
                        "docs": {
                          "CodiceFiscaleUtils.Validator_.html#.Validator.cfPlace": {
                            "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfPlace",
                            "tf": 20
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "o": {
              "docs": {},
              "v": {
                "docs": {},
                "i": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "c": {
                      "docs": {
                        "CodiceFiscaleUtils.Parser.html#.Parser.placeToCf": {
                          "ref": "CodiceFiscaleUtils.Parser.html#.Parser.placeToCf",
                          "tf": 28.333333333333332
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "o": {
          "docs": {},
          "m": {
            "docs": {},
            "o": {
              "docs": {},
              "c": {
                "docs": {},
                "o": {
                  "docs": {},
                  "d": {
                    "docs": {
                      "CodiceFiscaleUtils.Parser.html#.Parser.OMOCODE_BITMAP": {
                        "ref": "CodiceFiscaleUtils.Parser.html#.Parser.OMOCODE_BITMAP",
                        "tf": 16.666666666666664
                      }
                    },
                    "e": {
                      "docs": {},
                      "_": {
                        "docs": {},
                        "b": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              "m": {
                                "docs": {},
                                "a": {
                                  "docs": {},
                                  "p": {
                                    "docs": {
                                      "CodiceFiscaleUtils.Parser.html#.Parser.OMOCODE_BITMAP": {
                                        "ref": "CodiceFiscaleUtils.Parser.html#.Parser.OMOCODE_BITMAP",
                                        "tf": 75
                                      }
                                    }
                                  }
                                }
                              }
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
          "b": {
            "docs": {},
            "j": {
              "docs": {},
              "e": {
                "docs": {},
                "c": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthPlace": {
                        "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthPlace",
                        "tf": 25
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "s": {
          "docs": {},
          "t": {
            "docs": {},
            "r": {
              "docs": {},
              "i": {
                "docs": {},
                "n": {
                  "docs": {},
                  "g": {
                    "docs": {},
                    "|": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "u": {
                          "docs": {},
                          "l": {
                            "docs": {
                              "CodiceFiscaleUtils.Parser.html#.Parser.cfDeomocode": {
                                "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfDeomocode",
                                "tf": 25
                              },
                              "CodiceFiscaleUtils.Parser.html#.Parser.cfToSurname": {
                                "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToSurname",
                                "tf": 25
                              },
                              "CodiceFiscaleUtils.Parser.html#.Parser.cfToName": {
                                "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToName",
                                "tf": 25
                              },
                              "CodiceFiscaleUtils.Parser.html#.Parser.surnameToCf": {
                                "ref": "CodiceFiscaleUtils.Parser.html#.Parser.surnameToCf",
                                "tf": 25
                              },
                              "CodiceFiscaleUtils.Parser.html#.Parser.nameToCf": {
                                "ref": "CodiceFiscaleUtils.Parser.html#.Parser.nameToCf",
                                "tf": 25
                              },
                              "CodiceFiscaleUtils.Parser.html#.Parser.yearToCf": {
                                "ref": "CodiceFiscaleUtils.Parser.html#.Parser.yearToCf",
                                "tf": 25
                              },
                              "CodiceFiscaleUtils.Parser.html#.Parser.monthToCf": {
                                "ref": "CodiceFiscaleUtils.Parser.html#.Parser.monthToCf",
                                "tf": 25
                              },
                              "CodiceFiscaleUtils.Parser.html#.Parser.dayGenderToCf": {
                                "ref": "CodiceFiscaleUtils.Parser.html#.Parser.dayGenderToCf",
                                "tf": 20
                              },
                              "CodiceFiscaleUtils.Parser.html#.Parser.dateGenderToCf": {
                                "ref": "CodiceFiscaleUtils.Parser.html#.Parser.dateGenderToCf",
                                "tf": 20
                              },
                              "CodiceFiscaleUtils.Parser.html#.Parser.placeToCf": {
                                "ref": "CodiceFiscaleUtils.Parser.html#.Parser.placeToCf",
                                "tf": 20
                              }
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
          "u": {
            "docs": {},
            "r": {
              "docs": {},
              "n": {
                "docs": {},
                "a": {
                  "docs": {},
                  "m": {
                    "docs": {
                      "CodiceFiscaleUtils.Parser.html#.Parser.cfDeomocode": {
                        "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfDeomocode",
                        "tf": 16.666666666666664
                      },
                      "CodiceFiscaleUtils.Parser.html#.Parser.cfToSurname": {
                        "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToSurname",
                        "tf": 16.666666666666664
                      },
                      "CodiceFiscaleUtils.Parser.html#.Parser.surnameToCf": {
                        "ref": "CodiceFiscaleUtils.Parser.html#.Parser.surnameToCf",
                        "tf": 37.5
                      },
                      "CodiceFiscaleUtils.Validator_.html#.Validator.cfSurname": {
                        "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfSurname",
                        "tf": 35
                      }
                    },
                    "e": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "c": {
                            "docs": {},
                            "f": {
                              "docs": {
                                "CodiceFiscaleUtils.Parser.html#.Parser.surnameToCf": {
                                  "ref": "CodiceFiscaleUtils.Parser.html#.Parser.surnameToCf",
                                  "tf": 75
                                }
                              }
                            }
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
        "n": {
          "docs": {},
          "a": {
            "docs": {},
            "m": {
              "docs": {},
              "e": {
                "docs": {
                  "CodiceFiscaleUtils.Parser.html#.Parser.cfToName": {
                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToName",
                    "tf": 16.666666666666664
                  },
                  "CodiceFiscaleUtils.Parser.html#.Parser.nameToCf": {
                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.nameToCf",
                    "tf": 37.5
                  },
                  "CodiceFiscaleUtils.Parser.html#.Parser.placeToCf": {
                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.placeToCf",
                    "tf": 28.333333333333332
                  },
                  "CodiceFiscaleUtils.Validator_.html#.Validator.cfName": {
                    "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfName",
                    "tf": 35
                  }
                },
                "t": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "c": {
                      "docs": {},
                      "f": {
                        "docs": {
                          "CodiceFiscaleUtils.Parser.html#.Parser.nameToCf": {
                            "ref": "CodiceFiscaleUtils.Parser.html#.Parser.nameToCf",
                            "tf": 75
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "m": {
              "docs": {},
              "b": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "|": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "u": {
                          "docs": {},
                          "l": {
                            "docs": {
                              "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthYear": {
                                "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthYear",
                                "tf": 25
                              },
                              "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthMonth": {
                                "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthMonth",
                                "tf": 25
                              },
                              "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDay": {
                                "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDay",
                                "tf": 25
                              }
                            }
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
        "y": {
          "docs": {},
          "e": {
            "docs": {},
            "a": {
              "docs": {},
              "r": {
                "docs": {
                  "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthYear": {
                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthYear",
                    "tf": 12.5
                  },
                  "CodiceFiscaleUtils.Parser.html#.Parser.yearToCf": {
                    "ref": "CodiceFiscaleUtils.Parser.html#.Parser.yearToCf",
                    "tf": 37.5
                  },
                  "CodiceFiscaleUtils.Validator_.html#.Validator.cfYear": {
                    "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfYear",
                    "tf": 35
                  },
                  "CodiceFiscaleUtils.Validator_.html#.Validator.cfDay": {
                    "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfDay",
                    "tf": 10
                  },
                  "CodiceFiscaleUtils.Validator_.html#.Validator.cfDayGender": {
                    "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfDayGender",
                    "tf": 10
                  },
                  "CodiceFiscaleUtils.Validator_.html#.Validator.cfDateGender": {
                    "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfDateGender",
                    "tf": 10
                  }
                },
                "t": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "c": {
                      "docs": {},
                      "f": {
                        "docs": {
                          "CodiceFiscaleUtils.Parser.html#.Parser.yearToCf": {
                            "ref": "CodiceFiscaleUtils.Parser.html#.Parser.yearToCf",
                            "tf": 75
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
        "v": {
          "docs": {},
          "a": {
            "docs": {},
            "l": {
              "docs": {},
              "i": {
                "docs": {},
                "d": {
                  "docs": {
                    "CodiceFiscaleUtils.Validator_.html": {
                      "ref": "CodiceFiscaleUtils.Validator_.html",
                      "tf": 750
                    },
                    "CodiceFiscaleUtils.Validator_.html#.Validator.cfSurname": {
                      "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfSurname",
                      "tf": 10
                    },
                    "CodiceFiscaleUtils.Validator_.html#.Validator.cfName": {
                      "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfName",
                      "tf": 10
                    },
                    "CodiceFiscaleUtils.Validator_.html#.Validator.cfYear": {
                      "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfYear",
                      "tf": 10
                    },
                    "CodiceFiscaleUtils.Validator_.html#.Validator.cfMonth": {
                      "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfMonth",
                      "tf": 10
                    },
                    "CodiceFiscaleUtils.Validator_.html#.Validator.cfDay": {
                      "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfDay",
                      "tf": 10
                    },
                    "CodiceFiscaleUtils.Validator_.html#.Validator.cfDayGender": {
                      "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfDayGender",
                      "tf": 10
                    },
                    "CodiceFiscaleUtils.Validator_.html#.Validator.cfDateGender": {
                      "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfDateGender",
                      "tf": 10
                    }
                  },
                  "a": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "r": {
                          "docs": {},
                          ".": {
                            "docs": {},
                            "c": {
                              "docs": {},
                              "f": {
                                "docs": {},
                                "s": {
                                  "docs": {},
                                  "u": {
                                    "docs": {},
                                    "r": {
                                      "docs": {},
                                      "n": {
                                        "docs": {},
                                        "a": {
                                          "docs": {},
                                          "m": {
                                            "docs": {
                                              "CodiceFiscaleUtils.Validator_.html#.Validator.cfSurname": {
                                                "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfSurname",
                                                "tf": 600
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "n": {
                                  "docs": {},
                                  "a": {
                                    "docs": {},
                                    "m": {
                                      "docs": {
                                        "CodiceFiscaleUtils.Validator_.html#.Validator.cfName": {
                                          "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfName",
                                          "tf": 600
                                        }
                                      }
                                    }
                                  }
                                },
                                "y": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "a": {
                                      "docs": {},
                                      "r": {
                                        "docs": {
                                          "CodiceFiscaleUtils.Validator_.html#.Validator.cfYear": {
                                            "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfYear",
                                            "tf": 600
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "m": {
                                  "docs": {},
                                  "o": {
                                    "docs": {},
                                    "n": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "h": {
                                          "docs": {
                                            "CodiceFiscaleUtils.Validator_.html#.Validator.cfMonth": {
                                              "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfMonth",
                                              "tf": 600
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "d": {
                                  "docs": {},
                                  "a": {
                                    "docs": {},
                                    "y": {
                                      "docs": {
                                        "CodiceFiscaleUtils.Validator_.html#.Validator.cfDay": {
                                          "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfDay",
                                          "tf": 600
                                        }
                                      },
                                      "g": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "n": {
                                            "docs": {},
                                            "d": {
                                              "docs": {
                                                "CodiceFiscaleUtils.Validator_.html#.Validator.cfDayGender": {
                                                  "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfDayGender",
                                                  "tf": 595
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "t": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "g": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "n": {
                                              "docs": {},
                                              "d": {
                                                "docs": {
                                                  "CodiceFiscaleUtils.Validator_.html#.Validator.cfDateGender": {
                                                    "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfDateGender",
                                                    "tf": 595
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
                                "p": {
                                  "docs": {},
                                  "l": {
                                    "docs": {},
                                    "a": {
                                      "docs": {},
                                      "c": {
                                        "docs": {
                                          "CodiceFiscaleUtils.Validator_.html#.Validator.cfPlace": {
                                            "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfPlace",
                                            "tf": 595
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "v": {
                              "docs": {},
                              "a": {
                                "docs": {},
                                "l": {
                                  "docs": {},
                                  "i": {
                                    "docs": {},
                                    "d": {
                                      "docs": {},
                                      "a": {
                                        "docs": {},
                                        "t": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "r": {
                                              "docs": {},
                                              ".": {
                                                "docs": {},
                                                "c": {
                                                  "docs": {},
                                                  "f": {
                                                    "docs": {},
                                                    "s": {
                                                      "docs": {},
                                                      "u": {
                                                        "docs": {},
                                                        "r": {
                                                          "docs": {},
                                                          "n": {
                                                            "docs": {},
                                                            "a": {
                                                              "docs": {},
                                                              "m": {
                                                                "docs": {
                                                                  "CodiceFiscaleUtils.Validator_.html#.Validator.cfSurname": {
                                                                    "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfSurname",
                                                                    "tf": 75
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    },
                                                    "n": {
                                                      "docs": {},
                                                      "a": {
                                                        "docs": {},
                                                        "m": {
                                                          "docs": {
                                                            "CodiceFiscaleUtils.Validator_.html#.Validator.cfName": {
                                                              "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfName",
                                                              "tf": 75
                                                            }
                                                          }
                                                        }
                                                      }
                                                    },
                                                    "y": {
                                                      "docs": {},
                                                      "e": {
                                                        "docs": {},
                                                        "a": {
                                                          "docs": {},
                                                          "r": {
                                                            "docs": {
                                                              "CodiceFiscaleUtils.Validator_.html#.Validator.cfYear": {
                                                                "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfYear",
                                                                "tf": 75
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    },
                                                    "m": {
                                                      "docs": {},
                                                      "o": {
                                                        "docs": {},
                                                        "n": {
                                                          "docs": {},
                                                          "t": {
                                                            "docs": {},
                                                            "h": {
                                                              "docs": {
                                                                "CodiceFiscaleUtils.Validator_.html#.Validator.cfMonth": {
                                                                  "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfMonth",
                                                                  "tf": 75
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    },
                                                    "d": {
                                                      "docs": {},
                                                      "a": {
                                                        "docs": {},
                                                        "y": {
                                                          "docs": {
                                                            "CodiceFiscaleUtils.Validator_.html#.Validator.cfDay": {
                                                              "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfDay",
                                                              "tf": 75
                                                            }
                                                          },
                                                          "g": {
                                                            "docs": {},
                                                            "e": {
                                                              "docs": {},
                                                              "n": {
                                                                "docs": {},
                                                                "d": {
                                                                  "docs": {
                                                                    "CodiceFiscaleUtils.Validator_.html#.Validator.cfDayGender": {
                                                                      "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfDayGender",
                                                                      "tf": 75
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        },
                                                        "t": {
                                                          "docs": {},
                                                          "e": {
                                                            "docs": {},
                                                            "g": {
                                                              "docs": {},
                                                              "e": {
                                                                "docs": {},
                                                                "n": {
                                                                  "docs": {},
                                                                  "d": {
                                                                    "docs": {
                                                                      "CodiceFiscaleUtils.Validator_.html#.Validator.cfDateGender": {
                                                                        "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfDateGender",
                                                                        "tf": 75
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
                                                    "p": {
                                                      "docs": {},
                                                      "l": {
                                                        "docs": {},
                                                        "a": {
                                                          "docs": {},
                                                          "c": {
                                                            "docs": {
                                                              "CodiceFiscaleUtils.Validator_.html#.Validator.cfPlace": {
                                                                "ref": "CodiceFiscaleUtils.Validator_.html#.Validator.cfPlace",
                                                                "tf": 75
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
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
      "length": 357
    },
    "corpusTokens": [
      "belfior",
      "belfiore.belfior",
      "birth",
      "bitmap",
      "cf",
      "cfdategend",
      "cfday",
      "cfdaygend",
      "cfdeomocod",
      "cfmonth",
      "cfname",
      "cfplace",
      "cfsurnam",
      "cftobirthd",
      "cftobirthday",
      "cftobirthmonth",
      "cftobirthplac",
      "cftobirthyear",
      "cftogend",
      "cftonam",
      "cftosurnam",
      "cfyear",
      "class",
      "code",
      "codic",
      "codicefiscal",
      "codicefiscaleutil",
      "codicefiscaleutils.pars",
      "codicefiscaleutils.parser.parser.cfdeomocod",
      "codicefiscaleutils.parser.parser.cftobirthd",
      "codicefiscaleutils.parser.parser.cftobirthday",
      "codicefiscaleutils.parser.parser.cftobirthmonth",
      "codicefiscaleutils.parser.parser.cftobirthplac",
      "codicefiscaleutils.parser.parser.cftobirthyear",
      "codicefiscaleutils.parser.parser.cftogend",
      "codicefiscaleutils.parser.parser.cftonam",
      "codicefiscaleutils.parser.parser.cftosurnam",
      "codicefiscaleutils.parser.parser.dategendertocf",
      "codicefiscaleutils.parser.parser.daygendertocf",
      "codicefiscaleutils.parser.parser.monthtocf",
      "codicefiscaleutils.parser.parser.nametocf",
      "codicefiscaleutils.parser.parser.omocode_bitmap",
      "codicefiscaleutils.parser.parser.parsed",
      "codicefiscaleutils.parser.parser.placetocf",
      "codicefiscaleutils.parser.parser.surnametocf",
      "codicefiscaleutils.parser.parser.yeartocf",
      "codicefiscaleutils.valid",
      "codicefiscaleutils.validator.validator.cfdategend",
      "codicefiscaleutils.validator.validator.cfday",
      "codicefiscaleutils.validator.validator.cfdaygend",
      "codicefiscaleutils.validator.validator.cfmonth",
      "codicefiscaleutils.validator.validator.cfnam",
      "codicefiscaleutils.validator.validator.cfplac",
      "codicefiscaleutils.validator.validator.cfsurnam",
      "codicefiscaleutils.validator.validator.cfyear",
      "creat",
      "date",
      "date/gend",
      "dategendertocf",
      "date|nul",
      "day",
      "daygendertocf",
      "default",
      "document",
      "fiscal",
      "function",
      "gender",
      "gener",
      "given",
      "global",
      "handl",
      "index",
      "inform",
      "italian",
      "js",
      "list",
      "list:class",
      "list:modul",
      "lt;static",
      "lt;static&gt",
      "m'|'f'|null",
      "member",
      "modul",
      "module:codicefiscaleutil",
      "month",
      "monthtocf",
      "name",
      "nametocf",
      "number|nul",
      "object",
      "omocod",
      "omocode_bitmap",
      "pars",
      "parsed",
      "parser",
      "parser.cfdeomocod",
      "parser.cftobirthd",
      "parser.cftobirthday",
      "parser.cftobirthmonth",
      "parser.cftobirthplac",
      "parser.cftobirthyear",
      "parser.cftogend",
      "parser.cftonam",
      "parser.cftosurnam",
      "parser.dategendertocf",
      "parser.daygendertocf",
      "parser.monthtocf",
      "parser.nametocf",
      "parser.omocode_bitmap",
      "parser.parsed",
      "parser.parser.cfdeomocod",
      "parser.parser.cftobirthd",
      "parser.parser.cftobirthday",
      "parser.parser.cftobirthmonth",
      "parser.parser.cftobirthplac",
      "parser.parser.cftobirthyear",
      "parser.parser.cftogend",
      "parser.parser.cftonam",
      "parser.parser.cftosurnam",
      "parser.parser.dategendertocf",
      "parser.parser.daygendertocf",
      "parser.parser.monthtocf",
      "parser.parser.nametocf",
      "parser.parser.omocode_bitmap",
      "parser.parser.parsed",
      "parser.parser.placetocf",
      "parser.parser.surnametocf",
      "parser.parser.yeartocf",
      "parser.placetocf",
      "parser.surnametocf",
      "parser.yeartocf",
      "part",
      "place",
      "placenam",
      "placetocf",
      "provinc",
      "readm",
      "readonly&gt",
      "regexp",
      "string|nul",
      "surnam",
      "surnametocf",
      "util",
      "valid",
      "validator.cfdategend",
      "validator.cfday",
      "validator.cfdaygend",
      "validator.cfmonth",
      "validator.cfnam",
      "validator.cfplac",
      "validator.cfsurnam",
      "validator.cfyear",
      "validator.validator.cfdategend",
      "validator.validator.cfday",
      "validator.validator.cfdaygend",
      "validator.validator.cfmonth",
      "validator.validator.cfnam",
      "validator.validator.cfplac",
      "validator.validator.cfsurnam",
      "validator.validator.cfyear",
      "year",
      "yeartocf"
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
    },
    "list_class.html": {
      "id": "list_class.html",
      "kind": "list",
      "title": "Classes",
      "longname": "list:class",
      "name": "Classes",
      "tags": "list:class",
      "summary": "All documented classes.",
      "description": "",
      "body": ""
    },
    "list_module.html": {
      "id": "list_module.html",
      "kind": "list",
      "title": "Modules",
      "longname": "list:module",
      "name": "Modules",
      "tags": "list:module",
      "summary": "All documented modules.",
      "description": "",
      "body": ""
    },
    "Belfiore.Belfiore.html": {
      "id": "Belfiore.Belfiore.html",
      "kind": "class",
      "title": "Belfiore",
      "longname": "Belfiore.Belfiore",
      "name": "Belfiore",
      "tags": "Belfiore.Belfiore Belfiore",
      "summary": "",
      "description": "",
      "body": ""
    },
    "CodiceFiscaleUtils.Parser.html": {
      "id": "CodiceFiscaleUtils.Parser.html",
      "kind": "class",
      "title": "Parser",
      "longname": "CodiceFiscaleUtils.Parser",
      "name": "Parser",
      "tags": "CodiceFiscaleUtils.Parser Parser",
      "summary": "",
      "description": "",
      "body": ""
    },
    "CodiceFiscaleUtils.Parser.html#.Parser.OMOCODE_BITMAP": {
      "id": "CodiceFiscaleUtils.Parser.html#.Parser.OMOCODE_BITMAP",
      "kind": "member",
      "title": "&lt;static, readonly&gt; Parser.OMOCODE_BITMAP",
      "longname": "CodiceFiscaleUtils.Parser.Parser.OMOCODE_BITMAP",
      "name": "Parser.OMOCODE_BITMAP",
      "tags": "CodiceFiscaleUtils.Parser.Parser.OMOCODE_BITMAP Parser.Parser.OMOCODE_BITMAP Parser.OMOCODE_BITMAP OMOCODE_BITMAP",
      "summary": "",
      "description": "Default omocode bitmap"
    },
    "CodiceFiscaleUtils.Parser.html#.Parser.cfDeomocode": {
      "id": "CodiceFiscaleUtils.Parser.html#.Parser.cfDeomocode",
      "kind": "function",
      "title": "&lt;static&gt; Parser.cfDeomocode( codiceFiscale ) → {string|null}",
      "longname": "CodiceFiscaleUtils.Parser.Parser.cfDeomocode",
      "name": "Parser.cfDeomocode",
      "tags": "CodiceFiscaleUtils.Parser.Parser.cfDeomocode Parser.Parser.cfDeomocode Parser.cfDeomocode cfDeomocode",
      "summary": "",
      "description": "Parse surname information"
    },
    "CodiceFiscaleUtils.Parser.html#.Parser.cfToSurname": {
      "id": "CodiceFiscaleUtils.Parser.html#.Parser.cfToSurname",
      "kind": "function",
      "title": "&lt;static&gt; Parser.cfToSurname( codiceFiscale ) → {string|null}",
      "longname": "CodiceFiscaleUtils.Parser.Parser.cfToSurname",
      "name": "Parser.cfToSurname",
      "tags": "CodiceFiscaleUtils.Parser.Parser.cfToSurname Parser.Parser.cfToSurname Parser.cfToSurname cfToSurname",
      "summary": "",
      "description": "Parse surname information"
    },
    "CodiceFiscaleUtils.Parser.html#.Parser.cfToName": {
      "id": "CodiceFiscaleUtils.Parser.html#.Parser.cfToName",
      "kind": "function",
      "title": "&lt;static&gt; Parser.cfToName( codiceFiscale ) → {string|null}",
      "longname": "CodiceFiscaleUtils.Parser.Parser.cfToName",
      "name": "Parser.cfToName",
      "tags": "CodiceFiscaleUtils.Parser.Parser.cfToName Parser.Parser.cfToName Parser.cfToName cfToName",
      "summary": "",
      "description": "Parse name information"
    },
    "CodiceFiscaleUtils.Parser.html#.Parser.cfToGender": {
      "id": "CodiceFiscaleUtils.Parser.html#.Parser.cfToGender",
      "kind": "function",
      "title": "&lt;static&gt; Parser.cfToGender( codiceFiscale ) → {'M'|'F'|null}",
      "longname": "CodiceFiscaleUtils.Parser.Parser.cfToGender",
      "name": "Parser.cfToGender",
      "tags": "CodiceFiscaleUtils.Parser.Parser.cfToGender Parser.Parser.cfToGender Parser.cfToGender cfToGender",
      "summary": "",
      "description": "Parse gender information"
    },
    "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthYear": {
      "id": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthYear",
      "kind": "function",
      "title": "&lt;static&gt; Parser.cfToBirthYear( codiceFiscale ) → {number|null}",
      "longname": "CodiceFiscaleUtils.Parser.Parser.cfToBirthYear",
      "name": "Parser.cfToBirthYear",
      "tags": "CodiceFiscaleUtils.Parser.Parser.cfToBirthYear Parser.Parser.cfToBirthYear Parser.cfToBirthYear cfToBirthYear",
      "summary": "",
      "description": "Parse birth year information"
    },
    "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthMonth": {
      "id": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthMonth",
      "kind": "function",
      "title": "&lt;static&gt; Parser.cfToBirthMonth( codiceFiscale ) → {number|null}",
      "longname": "CodiceFiscaleUtils.Parser.Parser.cfToBirthMonth",
      "name": "Parser.cfToBirthMonth",
      "tags": "CodiceFiscaleUtils.Parser.Parser.cfToBirthMonth Parser.Parser.cfToBirthMonth Parser.cfToBirthMonth cfToBirthMonth",
      "summary": "",
      "description": "Parse birth month information"
    },
    "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDay": {
      "id": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDay",
      "kind": "function",
      "title": "&lt;static&gt; Parser.cfToBirthDay( codiceFiscale ) → {number|null}",
      "longname": "CodiceFiscaleUtils.Parser.Parser.cfToBirthDay",
      "name": "Parser.cfToBirthDay",
      "tags": "CodiceFiscaleUtils.Parser.Parser.cfToBirthDay Parser.Parser.cfToBirthDay Parser.cfToBirthDay cfToBirthDay",
      "summary": "",
      "description": "Parse birth day information"
    },
    "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDate": {
      "id": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthDate",
      "kind": "function",
      "title": "&lt;static&gt; Parser.cfToBirthDate( codiceFiscale ) → {Date|null}",
      "longname": "CodiceFiscaleUtils.Parser.Parser.cfToBirthDate",
      "name": "Parser.cfToBirthDate",
      "tags": "CodiceFiscaleUtils.Parser.Parser.cfToBirthDate Parser.Parser.cfToBirthDate Parser.cfToBirthDate cfToBirthDate",
      "summary": "",
      "description": "Parse birth date information"
    },
    "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthPlace": {
      "id": "CodiceFiscaleUtils.Parser.html#.Parser.cfToBirthPlace",
      "kind": "function",
      "title": "&lt;static&gt; Parser.cfToBirthPlace( codiceFiscale ) → {Object}",
      "longname": "CodiceFiscaleUtils.Parser.Parser.cfToBirthPlace",
      "name": "Parser.cfToBirthPlace",
      "tags": "CodiceFiscaleUtils.Parser.Parser.cfToBirthPlace Parser.Parser.cfToBirthPlace Parser.cfToBirthPlace cfToBirthPlace",
      "summary": "",
      "description": "Parse birth place information"
    },
    "CodiceFiscaleUtils.Parser.html#.Parser.surnameToCf": {
      "id": "CodiceFiscaleUtils.Parser.html#.Parser.surnameToCf",
      "kind": "function",
      "title": "&lt;static&gt; Parser.surnameToCf( surname ) → {string|null}",
      "longname": "CodiceFiscaleUtils.Parser.Parser.surnameToCf",
      "name": "Parser.surnameToCf",
      "tags": "CodiceFiscaleUtils.Parser.Parser.surnameToCf Parser.Parser.surnameToCf Parser.surnameToCf surnameToCf",
      "summary": "",
      "description": "Parse surname to cf part"
    },
    "CodiceFiscaleUtils.Parser.html#.Parser.nameToCf": {
      "id": "CodiceFiscaleUtils.Parser.html#.Parser.nameToCf",
      "kind": "function",
      "title": "&lt;static&gt; Parser.nameToCf( name ) → {string|null}",
      "longname": "CodiceFiscaleUtils.Parser.Parser.nameToCf",
      "name": "Parser.nameToCf",
      "tags": "CodiceFiscaleUtils.Parser.Parser.nameToCf Parser.Parser.nameToCf Parser.nameToCf nameToCf",
      "summary": "",
      "description": "Parse name to cf part"
    },
    "CodiceFiscaleUtils.Parser.html#.Parser.yearToCf": {
      "id": "CodiceFiscaleUtils.Parser.html#.Parser.yearToCf",
      "kind": "function",
      "title": "&lt;static&gt; Parser.yearToCf( year ) → {string|null}",
      "longname": "CodiceFiscaleUtils.Parser.Parser.yearToCf",
      "name": "Parser.yearToCf",
      "tags": "CodiceFiscaleUtils.Parser.Parser.yearToCf Parser.Parser.yearToCf Parser.yearToCf yearToCf",
      "summary": "",
      "description": "Parse year to cf part"
    },
    "CodiceFiscaleUtils.Parser.html#.Parser.monthToCf": {
      "id": "CodiceFiscaleUtils.Parser.html#.Parser.monthToCf",
      "kind": "function",
      "title": "&lt;static&gt; Parser.monthToCf( month ) → {string|null}",
      "longname": "CodiceFiscaleUtils.Parser.Parser.monthToCf",
      "name": "Parser.monthToCf",
      "tags": "CodiceFiscaleUtils.Parser.Parser.monthToCf Parser.Parser.monthToCf Parser.monthToCf monthToCf",
      "summary": "",
      "description": "Parse month information"
    },
    "CodiceFiscaleUtils.Parser.html#.Parser.dayGenderToCf": {
      "id": "CodiceFiscaleUtils.Parser.html#.Parser.dayGenderToCf",
      "kind": "function",
      "title": "&lt;static&gt; Parser.dayGenderToCf( day, gender ) → {string|null}",
      "longname": "CodiceFiscaleUtils.Parser.Parser.dayGenderToCf",
      "name": "Parser.dayGenderToCf",
      "tags": "CodiceFiscaleUtils.Parser.Parser.dayGenderToCf Parser.Parser.dayGenderToCf Parser.dayGenderToCf dayGenderToCf",
      "summary": "",
      "description": "Parse day information"
    },
    "CodiceFiscaleUtils.Parser.html#.Parser.parseDate": {
      "id": "CodiceFiscaleUtils.Parser.html#.Parser.parseDate",
      "kind": "function",
      "title": "&lt;static&gt; Parser.parseDate( date ) → {Date|null}",
      "longname": "CodiceFiscaleUtils.Parser.Parser.parseDate",
      "name": "Parser.parseDate",
      "tags": "CodiceFiscaleUtils.Parser.Parser.parseDate Parser.Parser.parseDate Parser.parseDate parseDate",
      "summary": "",
      "description": "Parse a Dated and Gender information to create Date/Gender CF part"
    },
    "CodiceFiscaleUtils.Parser.html#.Parser.dateGenderToCf": {
      "id": "CodiceFiscaleUtils.Parser.html#.Parser.dateGenderToCf",
      "kind": "function",
      "title": "&lt;static&gt; Parser.dateGenderToCf( date, gender ) → {string|null}",
      "longname": "CodiceFiscaleUtils.Parser.Parser.dateGenderToCf",
      "name": "Parser.dateGenderToCf",
      "tags": "CodiceFiscaleUtils.Parser.Parser.dateGenderToCf Parser.Parser.dateGenderToCf Parser.dateGenderToCf dateGenderToCf",
      "summary": "",
      "description": "Parse a Dated and Gender information to create Date/Gender CF part"
    },
    "CodiceFiscaleUtils.Parser.html#.Parser.placeToCf": {
      "id": "CodiceFiscaleUtils.Parser.html#.Parser.placeToCf",
      "kind": "function",
      "title": "&lt;static&gt; Parser.placeToCf( name [, province ] ) → {string|null}",
      "longname": "CodiceFiscaleUtils.Parser.Parser.placeToCf",
      "name": "Parser.placeToCf",
      "tags": "CodiceFiscaleUtils.Parser.Parser.placeToCf Parser.Parser.placeToCf Parser.placeToCf placeToCf",
      "summary": "",
      "description": "Parse place name and province to Belfiore code"
    },
    "CodiceFiscaleUtils.Validator_.html": {
      "id": "CodiceFiscaleUtils.Validator_.html",
      "kind": "class",
      "title": "Validator",
      "longname": "CodiceFiscaleUtils.Validator",
      "name": "Validator",
      "tags": "CodiceFiscaleUtils.Validator Validator",
      "summary": "",
      "description": "",
      "body": ""
    },
    "CodiceFiscaleUtils.Validator_.html#.Validator.cfSurname": {
      "id": "CodiceFiscaleUtils.Validator_.html#.Validator.cfSurname",
      "kind": "function",
      "title": "&lt;static&gt; Validator.cfSurname( surname ) → {RegExp}",
      "longname": "CodiceFiscaleUtils.Validator.Validator.cfSurname",
      "name": "Validator.cfSurname",
      "tags": "CodiceFiscaleUtils.Validator.Validator.cfSurname Validator.Validator.cfSurname Validator.cfSurname cfSurname",
      "summary": "",
      "description": "Validation regexp for the given surname or generic"
    },
    "CodiceFiscaleUtils.Validator_.html#.Validator.cfName": {
      "id": "CodiceFiscaleUtils.Validator_.html#.Validator.cfName",
      "kind": "function",
      "title": "&lt;static&gt; Validator.cfName( name ) → {RegExp}",
      "longname": "CodiceFiscaleUtils.Validator.Validator.cfName",
      "name": "Validator.cfName",
      "tags": "CodiceFiscaleUtils.Validator.Validator.cfName Validator.Validator.cfName Validator.cfName cfName",
      "summary": "",
      "description": "Validation regexp for the given name or generic"
    },
    "CodiceFiscaleUtils.Validator_.html#.Validator.cfYear": {
      "id": "CodiceFiscaleUtils.Validator_.html#.Validator.cfYear",
      "kind": "function",
      "title": "&lt;static&gt; Validator.cfYear( year ) → {RegExp}",
      "longname": "CodiceFiscaleUtils.Validator.Validator.cfYear",
      "name": "Validator.cfYear",
      "tags": "CodiceFiscaleUtils.Validator.Validator.cfYear Validator.Validator.cfYear Validator.cfYear cfYear",
      "summary": "",
      "description": "Validation regexp for the given year or generic"
    },
    "CodiceFiscaleUtils.Validator_.html#.Validator.cfMonth": {
      "id": "CodiceFiscaleUtils.Validator_.html#.Validator.cfMonth",
      "kind": "function",
      "title": "&lt;static&gt; Validator.cfMonth( month ) → {RegExp}",
      "longname": "CodiceFiscaleUtils.Validator.Validator.cfMonth",
      "name": "Validator.cfMonth",
      "tags": "CodiceFiscaleUtils.Validator.Validator.cfMonth Validator.Validator.cfMonth Validator.cfMonth cfMonth",
      "summary": "",
      "description": "Validation regexp for the given month or generic"
    },
    "CodiceFiscaleUtils.Validator_.html#.Validator.cfDay": {
      "id": "CodiceFiscaleUtils.Validator_.html#.Validator.cfDay",
      "kind": "function",
      "title": "&lt;static&gt; Validator.cfDay( day ) → {RegExp}",
      "longname": "CodiceFiscaleUtils.Validator.Validator.cfDay",
      "name": "Validator.cfDay",
      "tags": "CodiceFiscaleUtils.Validator.Validator.cfDay Validator.Validator.cfDay Validator.cfDay cfDay",
      "summary": "",
      "description": "Validation regexp for the given year or generic"
    },
    "CodiceFiscaleUtils.Validator_.html#.Validator.cfDayGender": {
      "id": "CodiceFiscaleUtils.Validator_.html#.Validator.cfDayGender",
      "kind": "function",
      "title": "&lt;static&gt; Validator.cfDayGender( day [, gender ] ) → {RegExp}",
      "longname": "CodiceFiscaleUtils.Validator.Validator.cfDayGender",
      "name": "Validator.cfDayGender",
      "tags": "CodiceFiscaleUtils.Validator.Validator.cfDayGender Validator.Validator.cfDayGender Validator.cfDayGender cfDayGender",
      "summary": "",
      "description": "Validation regexp for the given year or generic"
    },
    "CodiceFiscaleUtils.Validator_.html#.Validator.cfDateGender": {
      "id": "CodiceFiscaleUtils.Validator_.html#.Validator.cfDateGender",
      "kind": "function",
      "title": "&lt;static&gt; Validator.cfDateGender( date [, gender ] ) → {RegExp}",
      "longname": "CodiceFiscaleUtils.Validator.Validator.cfDateGender",
      "name": "Validator.cfDateGender",
      "tags": "CodiceFiscaleUtils.Validator.Validator.cfDateGender Validator.Validator.cfDateGender Validator.cfDateGender cfDateGender",
      "summary": "",
      "description": "Validation regexp for the given year or generic"
    },
    "CodiceFiscaleUtils.Validator_.html#.Validator.cfPlace": {
      "id": "CodiceFiscaleUtils.Validator_.html#.Validator.cfPlace",
      "kind": "function",
      "title": "&lt;static&gt; Validator.cfPlace( [ date ], placeName ) → {RegExp}",
      "longname": "CodiceFiscaleUtils.Validator.Validator.cfPlace",
      "name": "Validator.cfPlace",
      "tags": "CodiceFiscaleUtils.Validator.Validator.cfPlace Validator.Validator.cfPlace Validator.cfPlace cfPlace",
      "summary": "",
      "description": ""
    },
    "module-CodiceFiscaleUtils.html": {
      "id": "module-CodiceFiscaleUtils.html",
      "kind": "module",
      "title": "CodiceFiscaleUtils",
      "longname": "module:CodiceFiscaleUtils",
      "name": "CodiceFiscaleUtils",
      "tags": "module:CodiceFiscaleUtils",
      "summary": "",
      "description": "",
      "body": ""
    }
  }
};