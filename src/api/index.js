const base_url = process.env.VITE_REACT_APP_API_URL;

const current_user = "/api/current-user/";
const students = "/api/students/";
const student = "/api/students/:student_id/"
const student_points = "/api/students/:student_id/points/";
const student_prizes = "/api/students/:student_id/prizes/";
const student_prize = "/api/students/:student_id/prize/:prize_id/";
const student_task = "/api/students/:student_id/task/:task_id/"
const student_tasks = "/api/students/:student_id/tasks/"
const token = "/api/token-auth/"


function fillPath(pathname, params) {
  return pathname.replace(/[:*](\w+)/g, ($0, $1) => params[$1] ?? $0);
}


/*
{
  "paths": {
    "/api/current-user/": {
      "get": {
        "operationId": "current_user_retrieve",
          "description": "Determine the current user by their token, and return their data",
            "tags": [
              "current-user"
            ],
              "security": [
                {
                  "jwtAuth": []
                },
                {}
              ],
                "responses": {
          "200": {
            "description": "No response body"
          }
        }
      }
    },
    "/api/schema/": {
      "get": {
        "operationId": "schema_retrieve",
          "description": "OpenApi3 schema for this API. Format can be selected via content negotiation.\n\n- YAML: application/vnd.oai.openapi\n- JSON: application/vnd.oai.openapi+json",
            "parameters": [
              {
                "in": "query",
                "name": "format",
                "schema": {
                  "type": "string",
                  "enum": [
                    "json",
                    "yaml"
                  ]
                }
              },
              {
                "in": "query",
                "name": "lang",
                "schema": {
                  "type": "string",
                  "enum": [
                    "af",
                    "ar",
                    "ar-dz",
                    "ast",
                    "az",
                    "be",
                    "bg",
                    "bn",
                    "br",
                    "bs",
                    "ca",
                    "ckb",
                    "cs",
                    "cy",
                    "da",
                    "de",
                    "dsb",
                    "el",
                    "en",
                    "en-au",
                    "en-gb",
                    "eo",
                    "es",
                    "es-ar",
                    "es-co",
                    "es-mx",
                    "es-ni",
                    "es-ve",
                    "et",
                    "eu",
                    "fa",
                    "fi",
                    "fr",
                    "fy",
                    "ga",
                    "gd",
                    "gl",
                    "he",
                    "hi",
                    "hr",
                    "hsb",
                    "hu",
                    "hy",
                    "ia",
                    "id",
                    "ig",
                    "io",
                    "is",
                    "it",
                    "ja",
                    "ka",
                    "kab",
                    "kk",
                    "km",
                    "kn",
                    "ko",
                    "ky",
                    "lb",
                    "lt",
                    "lv",
                    "mk",
                    "ml",
                    "mn",
                    "mr",
                    "ms",
                    "my",
                    "nb",
                    "ne",
                    "nl",
                    "nn",
                    "os",
                    "pa",
                    "pl",
                    "pt",
                    "pt-br",
                    "ro",
                    "ru",
                    "sk",
                    "sl",
                    "sq",
                    "sr",
                    "sr-latn",
                    "sv",
                    "sw",
                    "ta",
                    "te",
                    "tg",
                    "th",
                    "tk",
                    "tr",
                    "tt",
                    "udm",
                    "uk",
                    "ur",
                    "uz",
                    "vi",
                    "zh-hans",
                    "zh-hant"
                  ]
                }
              }
            ],
              "tags": [
                "schema"
              ],
                "security": [
                  {
                    "jwtAuth": []
                  },
                  {}
                ],
                  "responses": {
          "200": {
            "content": {
              "application/vnd.oai.openapi": {
                "schema": {
                  "type": "object",
                    "additionalProperties": { }
                }
              },
              "application/yaml": {
                "schema": {
                  "type": "object",
                    "additionalProperties": { }
                }
              },
              "application/vnd.oai.openapi+json": {
                "schema": {
                  "type": "object",
                    "additionalProperties": { }
                }
              },
              "application/json": {
                "schema": {
                  "type": "object",
                    "additionalProperties": { }
                }
              }
            },
            "description": ""
          }
        }
      }
    },
    "/api/students/": {
      "get": {
        "operationId": "students_retrieve",
          "description": "Access students assigned to current user.\nUser must be authenticated and must be a caregiver.\n\nAdding a new student automatically assigns it to current user.",
            "tags": [
              "students"
            ],
              "security": [
                {
                  "jwtAuth": []
                }
              ],
                "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Student"
                }
              }
            },
            "description": ""
          }
        }
      },
      "post": {
        "operationId": "students_create",
          "description": "Access students assigned to current user.\nUser must be authenticated and must be a caregiver.\n\nAdding a new student automatically assigns it to current user.",
            "tags": [
              "students"
            ],
              "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Student"
              }
            },
            "application/x-www-form-urlencoded": {
              "schema": {
                "$ref": "#/components/schemas/Student"
              }
            },
            "multipart/form-data": {
              "schema": {
                "$ref": "#/components/schemas/Student"
              }
            }
          },
          "required": true
        },
        "security": [
          {
            "jwtAuth": []
          }
        ],
          "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Student"
                }
              }
            },
            "description": ""
          }
        }
      }
    },
    "/api/students/{student_id}/": {
      "get": {
        "operationId": "students_retrieve_2",
          "description": "Access single student assigned to current user.\nUser must be authenticated and must be assigned to the accessed student.",
            "parameters": [
              {
                "in": "path",
                "name": "student_id",
                "schema": {
                  "type": "integer"
                },
                "required": true
              }
            ],
              "tags": [
                "students"
              ],
                "security": [
                  {
                    "jwtAuth": []
                  }
                ],
                  "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Student"
                }
              }
            },
            "description": ""
          }
        }
      },
      "patch": {
        "operationId": "students_partial_update",
          "description": "Access single student assigned to current user.\nUser must be authenticated and must be assigned to the accessed student.",
            "parameters": [
              {
                "in": "path",
                "name": "student_id",
                "schema": {
                  "type": "integer"
                },
                "required": true
              }
            ],
              "tags": [
                "students"
              ],
                "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/PatchedStudent"
              }
            },
            "application/x-www-form-urlencoded": {
              "schema": {
                "$ref": "#/components/schemas/PatchedStudent"
              }
            },
            "multipart/form-data": {
              "schema": {
                "$ref": "#/components/schemas/PatchedStudent"
              }
            }
          }
        },
        "security": [
          {
            "jwtAuth": []
          }
        ],
          "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Student"
                }
              }
            },
            "description": ""
          }
        }
      }
    },
    "/api/students/{student_id}/points/": {
      "get": {
        "operationId": "students_points_retrieve",
          "description": "Access points assigned to the student.\nThis means claimed prizes and task rewards.\nUser must be authenticated and must be assigned to the accessed student.",
            "parameters": [
              {
                "in": "path",
                "name": "student_id",
                "schema": {
                  "type": "integer"
                },
                "required": true
              }
            ],
              "tags": [
                "students"
              ],
                "security": [
                  {
                    "jwtAuth": []
                  }
                ],
                  "responses": {
          "200": {
            "description": "No response body"
          }
        }
      },
      "post": {
        "operationId": "students_points_create",
          "description": "Access points assigned to the student.\nThis means claimed prizes and task rewards.\nUser must be authenticated and must be assigned to the accessed student.",
            "parameters": [
              {
                "in": "path",
                "name": "student_id",
                "schema": {
                  "type": "integer"
                },
                "required": true
              }
            ],
              "tags": [
                "students"
              ],
                "security": [
                  {
                    "jwtAuth": []
                  }
                ],
                  "responses": {
          "200": {
            "description": "No response body"
          }
        }
      }
    },
    "/api/students/{student_id}/prize/{prize_id}/": {
      "get": {
        "operationId": "students_prize_retrieve",
          "description": "Access single prize assigned to the student.\nUser must be authenticated and must be assigned to the accessed student.",
            "parameters": [
              {
                "in": "path",
                "name": "prize_id",
                "schema": {
                  "type": "integer"
                },
                "required": true
              },
              {
                "in": "path",
                "name": "student_id",
                "schema": {
                  "type": "integer"
                },
                "required": true
              }
            ],
              "tags": [
                "students"
              ],
                "security": [
                  {
                    "jwtAuth": []
                  }
                ],
                  "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Prize"
                }
              }
            },
            "description": ""
          }
        }
      },
      "patch": {
        "operationId": "students_prize_partial_update",
          "description": "Access single prize assigned to the student.\nUser must be authenticated and must be assigned to the accessed student.",
            "parameters": [
              {
                "in": "path",
                "name": "prize_id",
                "schema": {
                  "type": "integer"
                },
                "required": true
              },
              {
                "in": "path",
                "name": "student_id",
                "schema": {
                  "type": "integer"
                },
                "required": true
              }
            ],
              "tags": [
                "students"
              ],
                "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/PatchedPrize"
              }
            },
            "application/x-www-form-urlencoded": {
              "schema": {
                "$ref": "#/components/schemas/PatchedPrize"
              }
            },
            "multipart/form-data": {
              "schema": {
                "$ref": "#/components/schemas/PatchedPrize"
              }
            }
          }
        },
        "security": [
          {
            "jwtAuth": []
          }
        ],
          "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Prize"
                }
              }
            },
            "description": ""
          }
        }
      },
      "delete": {
        "operationId": "students_prize_destroy",
          "description": "Access single prize assigned to the student.\nUser must be authenticated and must be assigned to the accessed student.",
            "parameters": [
              {
                "in": "path",
                "name": "prize_id",
                "schema": {
                  "type": "integer"
                },
                "required": true
              },
              {
                "in": "path",
                "name": "student_id",
                "schema": {
                  "type": "integer"
                },
                "required": true
              }
            ],
              "tags": [
                "students"
              ],
                "security": [
                  {
                    "jwtAuth": []
                  }
                ],
                  "responses": {
          "204": {
            "description": "No response body"
          }
        }
      }
    },
    "/api/students/{student_id}/prizes/": {
      "get": {
        "operationId": "students_prizes_retrieve",
          "description": "Access prizes assigned to the student.\nUser must be authenticated and must be assigned to the accessed student.",
            "parameters": [
              {
                "in": "path",
                "name": "student_id",
                "schema": {
                  "type": "integer"
                },
                "required": true
              }
            ],
              "tags": [
                "students"
              ],
                "security": [
                  {
                    "jwtAuth": []
                  }
                ],
                  "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Prize"
                }
              }
            },
            "description": ""
          }
        }
      },
      "post": {
        "operationId": "students_prizes_create",
          "description": "Access prizes assigned to the student.\nUser must be authenticated and must be assigned to the accessed student.",
            "parameters": [
              {
                "in": "path",
                "name": "student_id",
                "schema": {
                  "type": "integer"
                },
                "required": true
              }
            ],
              "tags": [
                "students"
              ],
                "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Prize"
              }
            },
            "application/x-www-form-urlencoded": {
              "schema": {
                "$ref": "#/components/schemas/Prize"
              }
            },
            "multipart/form-data": {
              "schema": {
                "$ref": "#/components/schemas/Prize"
              }
            }
          },
          "required": true
        },
        "security": [
          {
            "jwtAuth": []
          }
        ],
          "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Prize"
                }
              }
            },
            "description": ""
          }
        }
      }
    },
    "/api/students/{student_id}/task/{task_id}/": {
      "get": {
        "operationId": "students_task_retrieve",
          "description": "Access single task assigned to the student.\nUser must be authenticated and must be assigned to the accessed student.",
            "parameters": [
              {
                "in": "path",
                "name": "student_id",
                "schema": {
                  "type": "integer"
                },
                "required": true
              },
              {
                "in": "path",
                "name": "task_id",
                "schema": {
                  "type": "integer"
                },
                "required": true
              }
            ],
              "tags": [
                "students"
              ],
                "security": [
                  {
                    "jwtAuth": []
                  }
                ],
                  "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Task"
                }
              }
            },
            "description": ""
          }
        }
      },
      "patch": {
        "operationId": "students_task_partial_update",
          "description": "Access single task assigned to the student.\nUser must be authenticated and must be assigned to the accessed student.",
            "parameters": [
              {
                "in": "path",
                "name": "student_id",
                "schema": {
                  "type": "integer"
                },
                "required": true
              },
              {
                "in": "path",
                "name": "task_id",
                "schema": {
                  "type": "integer"
                },
                "required": true
              }
            ],
              "tags": [
                "students"
              ],
                "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/PatchedTask"
              }
            },
            "application/x-www-form-urlencoded": {
              "schema": {
                "$ref": "#/components/schemas/PatchedTask"
              }
            },
            "multipart/form-data": {
              "schema": {
                "$ref": "#/components/schemas/PatchedTask"
              }
            }
          }
        },
        "security": [
          {
            "jwtAuth": []
          }
        ],
          "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Task"
                }
              }
            },
            "description": ""
          }
        }
      },
      "delete": {
        "operationId": "students_task_destroy",
          "description": "Access single task assigned to the student.\nUser must be authenticated and must be assigned to the accessed student.",
            "parameters": [
              {
                "in": "path",
                "name": "student_id",
                "schema": {
                  "type": "integer"
                },
                "required": true
              },
              {
                "in": "path",
                "name": "task_id",
                "schema": {
                  "type": "integer"
                },
                "required": true
              }
            ],
              "tags": [
                "students"
              ],
                "security": [
                  {
                    "jwtAuth": []
                  }
                ],
                  "responses": {
          "204": {
            "description": "No response body"
          }
        }
      }
    },
    "/api/students/{student_id}/tasks/": {
      "get": {
        "operationId": "students_tasks_retrieve",
          "description": "Access tasks assigned to the student.\nUser must be authenticated and must be assigned to the accessed student.",
            "parameters": [
              {
                "in": "path",
                "name": "student_id",
                "schema": {
                  "type": "integer"
                },
                "required": true
              }
            ],
              "tags": [
                "students"
              ],
                "security": [
                  {
                    "jwtAuth": []
                  }
                ],
                  "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Task"
                }
              }
            },
            "description": ""
          }
        }
      },
      "post": {
        "operationId": "students_tasks_create",
          "description": "Access tasks assigned to the student.\nUser must be authenticated and must be assigned to the accessed student.",
            "parameters": [
              {
                "in": "path",
                "name": "student_id",
                "schema": {
                  "type": "integer"
                },
                "required": true
              }
            ],
              "tags": [
                "students"
              ],
                "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Task"
              }
            },
            "application/x-www-form-urlencoded": {
              "schema": {
                "$ref": "#/components/schemas/Task"
              }
            },
            "multipart/form-data": {
              "schema": {
                "$ref": "#/components/schemas/Task"
              }
            }
          },
          "required": true
        },
        "security": [
          {
            "jwtAuth": []
          }
        ],
          "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Task"
                }
              }
            },
            "description": ""
          }
        }
      }
    },
    "/api/token-auth/": {
      "post": {
        "operationId": "token_auth_create",
          "description": "Takes a set of user credentials and returns an access and refresh JSON web\ntoken pair to prove the authentication of those credentials.",
            "tags": [
              "token-auth"
            ],
              "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/TokenObtainPair"
              }
            },
            "application/x-www-form-urlencoded": {
              "schema": {
                "$ref": "#/components/schemas/TokenObtainPair"
              }
            },
            "multipart/form-data": {
              "schema": {
                "$ref": "#/components/schemas/TokenObtainPair"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TokenObtainPair"
                }
              }
            },
            "description": ""
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "PatchedPrize": {
        "type": "object",
          "properties": {
          "pk": {
            "type": "integer",
              "readOnly": true
          },
          "student": {
            "type": "string",
              "readOnly": true
          },
          "name": {
            "type": "string"
          },
          "value": {
            "type": "integer",
              "minimum": 0
          }
        }
      },
      "PatchedStudent": {
        "type": "object",
          "properties": {
          "pk": {
            "type": "integer",
              "readOnly": true
          },
          "email": {
            "type": "string",
              "format": "email"
          },
          "username": {
            "type": "string"
          },
          "first_name": {
            "type": "string"
          },
          "last_name": {
            "type": "string"
          },
          "total_points": {
            "type": "integer",
              "minimum": 0
          }
        }
      },
      "PatchedTask": {
        "type": "object",
          "properties": {
          "pk": {
            "type": "integer",
              "readOnly": true
          },
          "student": {
            "type": "string",
              "readOnly": true
          },
          "name": {
            "type": "string"
          },
          "value": {
            "type": "integer",
              "minimum": 0
          }
        }
      },
      "Prize": {
        "type": "object",
          "properties": {
          "pk": {
            "type": "integer",
              "readOnly": true
          },
          "student": {
            "type": "string",
              "readOnly": true
          },
          "name": {
            "type": "string"
          },
          "value": {
            "type": "integer",
              "minimum": 0
          }
        },
        "required": [
          "name",
          "pk",
          "student",
          "value"
        ]
      },
      "Student": {
        "type": "object",
          "properties": {
          "pk": {
            "type": "integer",
              "readOnly": true
          },
          "email": {
            "type": "string",
              "format": "email"
          },
          "username": {
            "type": "string"
          },
          "first_name": {
            "type": "string"
          },
          "last_name": {
            "type": "string"
          },
          "total_points": {
            "type": "integer",
              "minimum": 0
          }
        },
        "required": [
          "email",
          "first_name",
          "last_name",
          "pk",
          "total_points",
          "username"
        ]
      },
      "Task": {
        "type": "object",
          "properties": {
          "pk": {
            "type": "integer",
              "readOnly": true
          },
          "student": {
            "type": "string",
              "readOnly": true
          },
          "name": {
            "type": "string"
          },
          "value": {
            "type": "integer",
              "minimum": 0
          }
        },
        "required": [
          "name",
          "pk",
          "student",
          "value"
        ]
      },
      "TokenObtainPair": {
        "type": "object",
          "properties": {
          "username": {
            "type": "string",
              "writeOnly": true
          },
          "password": {
            "type": "string",
              "writeOnly": true
          },
          "access": {
            "type": "string",
              "readOnly": true
          },
          "refresh": {
            "type": "string",
              "readOnly": true
          }
        },
        "required": [
          "access",
          "password",
          "refresh",
          "username"
        ]
      }
    },
    "securitySchemes": {
      "jwtAuth": {
        "type": "http",
          "scheme": "bearer",
            "bearerFormat": "JWT"
      }
    }
  }
}
  */