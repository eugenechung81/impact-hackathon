/**
* This file was automatically generated by json-schema-to-typescript.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run json-schema-to-typescript to regenerate this file.
*/

export interface HttpDeepalgoComSchemasIocaJsonSchemaYml {
  /**
   * Array of diagram nodes
   */
  nodeList?: Node[];
  /**
   * List of all links in the graph
   * 
   */
  linkList?: Link[];
  /**
   * More information about this graph
   */
  meta?: {
      /**
     * Title of this algorithm, as a "How to?" question.
     */
  title?: string;
      /**
     * Name and signature of the method represented by this graph.
     */
  methodName?: string;
    codeReference?: CodeReference;
    [k: string]: any;
  };
  [k: string]: any;
}
export interface Node {
  /**
   * The key is an identifying id.
   */
  key: string;
  codeReference: CodeReference;
  /**
   * A short textual label for this node, representing either the piece of data that the node represents (input or output), the action that the node performs (activity) or the expression that must be true in order to enter the conditional branch (condition).
   * 
   */
  text: string;
  /**
   * Detailed textual information about the possible values/states of this node.
   * 
   */
  description: string[];
  /**
   * When true, this node can "contain" other nodes. For example, a Condition is always a group and contains some nodes of the same diagram, that have their `group` property set to the `key` of the condition.
   * 
   */
  isGroup?: boolean;
  /**
   * The key of another node of this same graph that "contains" this node.
   * 
   */
  group?: string;
  /**
   * Type of diagram node.
   * 
   */
  category: ("OfInput" | "OfValue" | "OfOutput" | "OfCondition" | "OfConditionAlt" | "OfLoop" | "OfActivity");
  /**
   * This field is present if and only if the node corresponds to the call of a function in the program. In that case, this field is the ID of another diagram, which can be loaded into this one.
   * 
   */
  calledGraphId: (string | null);
  /**
   * Order of this node in a topological sort.
   */
  topoIndex: number;
  /**
   * Depth of this node when walking the graph forward. All entry nodes (probably inputs) have 0 and the number only increases while following edges, up to `d` (= the maximum depth) for one of the exit nodes.
   * 
   */
  forwardDepth: number;
  /**
   * Depth of this node when walking the graph backward. All exit nodes (probably outputs) have `d` (= the maximum depth) and the number only decreases when following inedges, down to 0 for one of the entry nodes.
   * 
   */
  backwardDepth: number;
}
/**
 * Location of the corresponding source code
 */
export interface CodeReference {
  fileName?: string;
  lineStart?: number;
  lineEnd?: number;
}
/**
 * Directed edge between two nodes
 */
export interface Link {
  /**
   * Node out of which the link starts
   */
  from: {
      /**
     * node id withing this graph
     */
  nodeIdInCurrentGraph?: string;
      /**
     * node id within the called graph
     */
  nodeIdInCalledGraph?: string;
  };
  /**
   * Node into which the link stops
   */
  to: {
      /**
     * node id withing this graph
     */
  nodeIdInCurrentGraph?: string;
      /**
     * node id within the called graph
     */
  nodeIdInCalledGraph?: string;
  };
}
