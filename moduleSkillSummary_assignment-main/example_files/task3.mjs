const tree = {
    "value": 281,
    "left": null,
    "right": {
        "value": 168,
        "left": {
            "value": 732,
            "left": {
                "value": 653,
                "left": {
                    "value": 372,
                    "left": null,
                    "right": {
                        "value": 879,
                        "left": null,
                        "right": {
                            "value": 330,
                            "left": {
                                "value": 752,
                                "left": null,
                                "right": {
                                    "value": 328,
                                    "left": null,
                                    "right": {
                                        "value": 278,
                                        "left": null,
                                        "right": {
                                            "value": 983,
                                            "left": {
                                                "value": 924,
                                                "left": {
                                                    "value": 269,
                                                    "left": {
                                                        "value": 558,
                                                        "left": {
                                                            "value": 571,
                                                            "left": null,
                                                            "right": {
                                                                "value": 241,
                                                                "left": null,
                                                                "right": null
                                                            }
                                                        },
                                                        "right": null
                                                    },
                                                    "right": null
                                                },
                                                "right": null
                                            },
                                            "right": {
                                                "value": 912,
                                                "left": null,
                                                "right": {
                                                    "value": 438,
                                                    "left": {
                                                        "value": 977,
                                                        "left": null,
                                                        "right": {
                                                            "value": 119,
                                                            "left": null,
                                                            "right": {
                                                                "value": 410,
                                                                "left": null,
                                                                "right": {
                                                                    "value": 97,
                                                                    "left": null,
                                                                    "right": {
                                                                        "value": 906,
                                                                        "left": null,
                                                                        "right": null
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 971,
                                                        "left": null,
                                                        "right": {
                                                            "value": 441,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            "right": null
                        }
                    }
                },
                "right": null
            },
            "right": {
                "value": 364,
                "left": {
                    "value": 131,
                    "left": null,
                    "right": {
                        "value": 125,
                        "left": null,
                        "right": {
                            "value": 895,
                            "left": {
                                "value": 910,
                                "left": null,
                                "right": {
                                    "value": 838,
                                    "left": {
                                        "value": 12,
                                        "left": null,
                                        "right": {
                                            "value": 703,
                                            "left": {
                                                "value": 809,
                                                "left": null,
                                                "right": null
                                            },
                                            "right": null
                                        }
                                    },
                                    "right": null
                                }
                            },
                            "right": {
                                "value": 86,
                                "left": null,
                                "right": {
                                    "value": 429,
                                    "left": null,
                                    "right": {
                                        "value": 547,
                                        "left": null,
                                        "right": {
                                            "value": 545,
                                            "left": null,
                                            "right": {
                                                "value": 267,
                                                "left": {
                                                    "value": 652,
                                                    "left": null,
                                                    "right": null
                                                },
                                                "right": null
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "right": null
            }
        },
        "right": null
    }
};

function calculateSum(node) {
    if (node === null) return 0;
    return node.value + calculateSum(node.left) + calculateSum(node.right);
}

function findDeepestLevel(node) {
    if (node === null) return 0;
    const leftDepth = findDeepestLevel(node.left);
    const rightDepth = findDeepestLevel(node.right);
    return Math.max(leftDepth, rightDepth) + 1;
}

function countNodes(node) {
    if (node === null) return 0;
    return 1 + countNodes(node.left) + countNodes(node.right);
}

const sum = calculateSum(tree);
const deepestLevel = findDeepestLevel(tree);
const totalNodes = countNodes(tree);

console.log(`Sum of all node values: ${sum}`);
console.log(`Deepest level of tree: ${deepestLevel}`);
console.log(`Total number of nodes: ${totalNodes}`);
