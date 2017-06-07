      var data = {
  "linkList": [
    {"from": { "nodeIdInCurrentGraph": "1", "nodeIdInCalledGraph": null},
     "to" : { "nodeIdInCurrentGraph": "5", "nodeIdInCalledGraph": null}
    },
     {"from": { "nodeIdInCurrentGraph": "5", "nodeIdInCalledGraph": null},
     "to" : { "nodeIdInCurrentGraph": "6", "nodeIdInCalledGraph": null}
    }
  ],
  "nodeList": [
    {
      "backwardDepth": 1.0,
      "forwardDepth": 1.0,
      "topoIndex": 1.0,
      "category": "OfInput",
      "description": [
        "data"
      ],
      "text": "data",
      "calledGraphId":null,
      "key": "1",
      "codeReference": { "fileName": "main.cpp", "lineStart":1, "lineEnd":1}
    },
    {
      "backwardDepth": 2.0,
      "forwardDepth": 2.0,
      "topoIndex": 2.0,
      "category": "OfActivity",
      "description": [
        "print data"
      ],
      "text": "print data",
      "calledGraphId":"callee.json",
      "key": "2",
      "codeReference": { "fileName": "main.cpp", "lineStart":1, "lineEnd":1},
      "isGroup":true
    },
    {
      "backwardDepth": 1.0,
      "forwardDepth": 1.0,
      "topoIndex": 1.0,
      "category": "OfInput",
      "description": [
        "parameter"
      ],
      "text": "parameter",
      "calledGraphId":null,
      "key": "5",
      "codeReference": { "fileName": "main.cpp", "lineStart":3, "lineEnd":3},
      "group":"2"
    },
    {
      "backwardDepth": 2.0,
      "forwardDepth": 2.0,
      "topoIndex": 2.0,
      "category": "OfOutput",
      "description": [
        "write parameter"
      ],
      "text": "write parameter ",
      "calledGraphId":null,
      "key": "6",
      "codeReference": { "fileName": "main.cpp", "lineStart":3, "lineEnd":3},
      "group":"2"
    }
  ],
  "meta": {
    "title": "Callee and caller DFG"
  }
}
;
