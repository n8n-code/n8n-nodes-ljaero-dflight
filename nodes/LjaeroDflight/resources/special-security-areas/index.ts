import type { INodeProperties } from 'n8n-workflow';

export const specialSecurityAreasDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Special Security Areas"
					]
				}
			},
			"options": [
				{
					"name": "Ssa By Distance Us v1 Ssa Distance Query Post",
					"value": "Ssa By Distance Us v1 Ssa Distance Query Post",
					"action": "Retrieve all special security areas located within given distance of location.",
					"description": "Retrieve special security areas existing within given distance from a point. Request body parameters are:\n* latitude:  WGS84 latitude coordinate of your selected point, in decimal degrees\n* longitude:  WGS84 longitude coordinate of your selected point, in decimal degrees\n* distance:  distance in meters (max allowed value is 25000)",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/us/v1/ssa/distance-query"
						}
					}
				},
				{
					"name": "Ssa By Poly Us v1 Ssa Polygon Query Post",
					"value": "Ssa By Poly Us v1 Ssa Polygon Query Post",
					"action": "Retrieve all special security areas located within given GeoJSON Polygon.",
					"description": "Retrieve all special security areas located within given area. Request body parameters are:\n* poly:  [GeoJSON Polygon](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the area. Max allowed area is 1000 km^2.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/us/v1/ssa/polygon-query"
						}
					}
				},
				{
					"name": "Ssa By Route Us v1 Ssa Route Query Post",
					"value": "Ssa By Route Us v1 Ssa Route Query Post",
					"action": "Retrieve all special security areas traversed by route.",
					"description": "Retrieve all special security areas intersected by route. Request body parameters are:\n* route: [GeoJSON Linestring](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the route. Max allowed length is 50 km.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/us/v1/ssa/route-query"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /us/v1/ssa/distance-query",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Special Security Areas"
					],
					"operation": [
						"Ssa By Distance Us v1 Ssa Distance Query Post"
					]
				}
			}
		},
		{
			"displayName": "X API Key",
			"name": "x-api-key",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-api-key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Special Security Areas"
					],
					"operation": [
						"Ssa By Distance Us v1 Ssa Distance Query Post"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Distance",
			"name": "distance",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "distance",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Special Security Areas"
					],
					"operation": [
						"Ssa By Distance Us v1 Ssa Distance Query Post"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Latitude",
			"name": "latitude",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "latitude",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Special Security Areas"
					],
					"operation": [
						"Ssa By Distance Us v1 Ssa Distance Query Post"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Longitude",
			"name": "longitude",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "longitude",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Special Security Areas"
					],
					"operation": [
						"Ssa By Distance Us v1 Ssa Distance Query Post"
					]
				}
			}
		},
		{
			"displayName": "POST /us/v1/ssa/polygon-query",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Special Security Areas"
					],
					"operation": [
						"Ssa By Poly Us v1 Ssa Polygon Query Post"
					]
				}
			}
		},
		{
			"displayName": "X API Key",
			"name": "x-api-key",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-api-key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Special Security Areas"
					],
					"operation": [
						"Ssa By Poly Us v1 Ssa Polygon Query Post"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Poly",
			"name": "poly",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "poly",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Special Security Areas"
					],
					"operation": [
						"Ssa By Poly Us v1 Ssa Polygon Query Post"
					]
				}
			}
		},
		{
			"displayName": "POST /us/v1/ssa/route-query",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Special Security Areas"
					],
					"operation": [
						"Ssa By Route Us v1 Ssa Route Query Post"
					]
				}
			}
		},
		{
			"displayName": "X API Key",
			"name": "x-api-key",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-api-key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Special Security Areas"
					],
					"operation": [
						"Ssa By Route Us v1 Ssa Route Query Post"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Route",
			"name": "route",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "route",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Special Security Areas"
					],
					"operation": [
						"Ssa By Route Us v1 Ssa Route Query Post"
					]
				}
			}
		},
];
