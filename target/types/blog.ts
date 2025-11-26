/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/blog.json`.
 */
export type Blog = {
  "address": "97LDGVBJPc2TGqZu7UZZn4yWoHv2t9LojWXaoYhKnfdn",
  "metadata": {
    "name": "blog",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "createComment",
      "discriminator": [
        236,
        232,
        11,
        180,
        70,
        206,
        73,
        145
      ],
      "accounts": [
        {
          "name": "postAccount",
          "docs": [
            "The post's account (owner of the post)"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  115,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "post_account.author",
                "account": "postAccount"
              },
              {
                "kind": "account",
                "path": "post_account.post_id",
                "account": "postAccount"
              }
            ]
          }
        },
        {
          "name": "commentAccount",
          "docs": [
            "The comment account to be created"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  109,
                  109,
                  101,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "post_account.author",
                "account": "postAccount"
              },
              {
                "kind": "account",
                "path": "post_account.post_id",
                "account": "postAccount"
              },
              {
                "kind": "account",
                "path": "post_account.comment_count",
                "account": "postAccount"
              }
            ]
          }
        },
        {
          "name": "commenter",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "content",
          "type": "string"
        }
      ]
    },
    {
      "name": "createPost",
      "discriminator": [
        123,
        92,
        184,
        29,
        231,
        24,
        15,
        202
      ],
      "accounts": [
        {
          "name": "blogAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  98,
                  108,
                  111,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "author"
              }
            ]
          }
        },
        {
          "name": "postAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  115,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "author"
              },
              {
                "kind": "account",
                "path": "blog_account.post_count",
                "account": "blogAccount"
              }
            ]
          }
        },
        {
          "name": "author",
          "writable": true,
          "signer": true,
          "relations": [
            "blogAccount"
          ]
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "content",
          "type": "string"
        }
      ]
    },
    {
      "name": "deletePost",
      "discriminator": [
        208,
        39,
        67,
        161,
        55,
        13,
        153,
        42
      ],
      "accounts": [
        {
          "name": "postAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  115,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "post_account.author",
                "account": "postAccount"
              },
              {
                "kind": "account",
                "path": "post_account.post_id",
                "account": "postAccount"
              }
            ]
          }
        },
        {
          "name": "author",
          "writable": true,
          "signer": true
        }
      ],
      "args": []
    },
    {
      "name": "initializeBlog",
      "discriminator": [
        195,
        223,
        187,
        134,
        244,
        232,
        54,
        32
      ],
      "accounts": [
        {
          "name": "blogAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  98,
                  108,
                  111,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "author"
              }
            ]
          }
        },
        {
          "name": "author",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "initializeProfile",
      "discriminator": [
        32,
        145,
        77,
        213,
        58,
        39,
        251,
        234
      ],
      "accounts": [
        {
          "name": "profileAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  102,
                  105,
                  108,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "author"
              }
            ]
          }
        },
        {
          "name": "author",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "displayName",
          "type": "string"
        },
        {
          "name": "bio",
          "type": "string"
        },
        {
          "name": "avatarUrl",
          "type": "string"
        }
      ]
    },
    {
      "name": "updatePost",
      "discriminator": [
        151,
        128,
        207,
        107,
        169,
        246,
        241,
        107
      ],
      "accounts": [
        {
          "name": "postAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  115,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "post_account.author",
                "account": "postAccount"
              },
              {
                "kind": "account",
                "path": "post_account.post_id",
                "account": "postAccount"
              }
            ]
          }
        },
        {
          "name": "author",
          "writable": true,
          "signer": true
        }
      ],
      "args": [
        {
          "name": "newTitle",
          "type": {
            "option": "string"
          }
        },
        {
          "name": "newContent",
          "type": {
            "option": "string"
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "blogAccount",
      "discriminator": [
        175,
        29,
        42,
        253,
        243,
        77,
        150,
        155
      ]
    },
    {
      "name": "commentAccount",
      "discriminator": [
        42,
        146,
        173,
        246,
        2,
        22,
        223,
        91
      ]
    },
    {
      "name": "postAccount",
      "discriminator": [
        85,
        236,
        139,
        84,
        240,
        243,
        196,
        23
      ]
    },
    {
      "name": "profileAccount",
      "discriminator": [
        105,
        84,
        179,
        172,
        116,
        226,
        171,
        52
      ]
    }
  ],
  "events": [
    {
      "name": "blogInitialized",
      "discriminator": [
        234,
        75,
        52,
        51,
        103,
        93,
        148,
        242
      ]
    },
    {
      "name": "commentCreated",
      "discriminator": [
        27,
        186,
        105,
        74,
        47,
        93,
        2,
        106
      ]
    },
    {
      "name": "postCreated",
      "discriminator": [
        209,
        178,
        232,
        24,
        158,
        92,
        77,
        227
      ]
    },
    {
      "name": "postDeleted",
      "discriminator": [
        206,
        216,
        247,
        146,
        26,
        233,
        204,
        110
      ]
    },
    {
      "name": "postUpdated",
      "discriminator": [
        177,
        179,
        216,
        67,
        207,
        250,
        39,
        2
      ]
    },
    {
      "name": "profileInitialized",
      "discriminator": [
        1,
        31,
        122,
        19,
        193,
        205,
        23,
        27
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "titleTooLong",
      "msg": "Title too long"
    },
    {
      "code": 6001,
      "name": "contentTooLong",
      "msg": "Content too long"
    },
    {
      "code": 6002,
      "name": "unauthorized",
      "msg": "unauthorized"
    },
    {
      "code": 6003,
      "name": "numericalOverflow",
      "msg": "Numerical overflow"
    },
    {
      "code": 6004,
      "name": "commentTooLong",
      "msg": "Comment too long"
    }
  ],
  "types": [
    {
      "name": "blogAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "author",
            "type": "pubkey"
          },
          {
            "name": "postCount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "blogInitialized",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "author",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "commentAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "commenter",
            "type": "pubkey"
          },
          {
            "name": "postAuthor",
            "type": "pubkey"
          },
          {
            "name": "postId",
            "type": "u64"
          },
          {
            "name": "commentId",
            "type": "u64"
          },
          {
            "name": "content",
            "type": "string"
          },
          {
            "name": "createdAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "commentCreated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "commenter",
            "type": "pubkey"
          },
          {
            "name": "postAuthor",
            "type": "pubkey"
          },
          {
            "name": "postId",
            "type": "u64"
          },
          {
            "name": "commentId",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "postAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "author",
            "type": "pubkey"
          },
          {
            "name": "postId",
            "type": "u64"
          },
          {
            "name": "title",
            "type": "string"
          },
          {
            "name": "content",
            "type": "string"
          },
          {
            "name": "createdAt",
            "type": "i64"
          },
          {
            "name": "updatedAt",
            "type": "i64"
          },
          {
            "name": "commentCount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "postCreated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "author",
            "type": "pubkey"
          },
          {
            "name": "postId",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "postDeleted",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "author",
            "type": "pubkey"
          },
          {
            "name": "postId",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "postUpdated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "author",
            "type": "pubkey"
          },
          {
            "name": "postId",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "profileAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "author",
            "type": "pubkey"
          },
          {
            "name": "displayName",
            "type": "string"
          },
          {
            "name": "bio",
            "type": "string"
          },
          {
            "name": "avatarUrl",
            "type": "string"
          },
          {
            "name": "joinedAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "profileInitialized",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "author",
            "type": "pubkey"
          }
        ]
      }
    }
  ]
};
