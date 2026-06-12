import type { INodeProperties } from 'n8n-workflow';

export const surfaceObstaclesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Surface Obstacles"
					]
				}
			},
			"options": [
				{
					"name": "Obstacles By Distance Us v1 Obstacles Distance Query Post",
					"value": "Obstacles By Distance Us v1 Obstacles Distance Query Post",
					"action": "Retrieve obstacles within given distance of location.",
					"description": "Retrieve obstacles within given distance of a point. Request body parameters are:\n* latitude:  WGS84 latitude coordinate of your selected point, in decimal degrees\n* longitude:  WGS84 longitude coordinate of your selected point, in decimal degrees\n* distance:  distance in meters (max allowed value is 25000)",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/us/v1/obstacles/distance-query"
						}
					}
				},
				{
					"name": "Obstacles By Poly Us v1 Obstacles Polygon Query Post",
					"value": "Obstacles By Poly Us v1 Obstacles Polygon Query Post",
					"action": "Retrieve obstacles located within given area.",
					"description": "Retrieve obstacles located within given area. Request body parameters are:\n* poly:  [GeoJSON Polygon](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the area. Max allowed area is 1000 km^2.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/us/v1/obstacles/polygon-query"
						}
					}
				},
				{
					"name": "Obstacles By Route Us v1 Obstacles Route Query Post",
					"value": "Obstacles By Route Us v1 Obstacles Route Query Post",
					"action": "Retrieve obstacles found along a route.",
					"description": "Retrieve obstacles found along a route. Request body parameters are:\n* route: [GeoJSON Linestring](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the route. Max allowed length is 50 km.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/us/v1/obstacles/route-query"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /us/v1/obstacles/distance-query",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Surface Obstacles"
					],
					"operation": [
						"Obstacles By Distance Us v1 Obstacles Distance Query Post"
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
						"Surface Obstacles"
					],
					"operation": [
						"Obstacles By Distance Us v1 Obstacles Distance Query Post"
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
						"Surface Obstacles"
					],
					"operation": [
						"Obstacles By Distance Us v1 Obstacles Distance Query Post"
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
						"Surface Obstacles"
					],
					"operation": [
						"Obstacles By Distance Us v1 Obstacles Distance Query Post"
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
						"Surface Obstacles"
					],
					"operation": [
						"Obstacles By Distance Us v1 Obstacles Distance Query Post"
					]
				}
			}
		},
		{
			"displayName": "POST /us/v1/obstacles/polygon-query",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Surface Obstacles"
					],
					"operation": [
						"Obstacles By Poly Us v1 Obstacles Polygon Query Post"
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
						"Surface Obstacles"
					],
					"operation": [
						"Obstacles By Poly Us v1 Obstacles Polygon Query Post"
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
						"Surface Obstacles"
					],
					"operation": [
						"Obstacles By Poly Us v1 Obstacles Polygon Query Post"
					]
				}
			}
		},
		{
			"displayName": "POST /us/v1/obstacles/route-query",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Surface Obstacles"
					],
					"operation": [
						"Obstacles By Route Us v1 Obstacles Route Query Post"
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
						"Surface Obstacles"
					],
					"operation": [
						"Obstacles By Route Us v1 Obstacles Route Query Post"
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
						"Surface Obstacles"
					],
					"operation": [
						"Obstacles By Route Us v1 Obstacles Route Query Post"
					]
				}
			}
		},
];
