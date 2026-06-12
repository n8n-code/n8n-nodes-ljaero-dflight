import type { INodeProperties } from 'n8n-workflow';

export const restrictedPublicVenuesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Restricted Public Venues"
					]
				}
			},
			"options": [
				{
					"name": "Ven By Distance Us v1 Venues Distance Query Post",
					"value": "Ven By Distance Us v1 Venues Distance Query Post",
					"action": "Retrieve all restricted public venues located within given distance of location.",
					"description": "Retrieve venues existing within given distance from a point. Request body parameters are:\n* latitude:  WGS84 latitude coordinate of your selected point, in decimal degrees\n* longitude:  WGS84 longitude coordinate of your selected point, in decimal degrees\n* distance:  distance in meters (max allowed value is 25000)",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/us/v1/venues/distance-query"
						}
					}
				},
				{
					"name": "Ven By Poly Us v1 Venues Polygon Query Post",
					"value": "Ven By Poly Us v1 Venues Polygon Query Post",
					"action": "Retrieve all restricted public venues located within given GeoJSON Polygon.",
					"description": "Retrieve all restricted public venues located within given area. Request body parameters are:\n* poly:  [GeoJSON Polygon](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the area. Max allowed area is 1000 km^2.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/us/v1/venues/polygon-query"
						}
					}
				},
				{
					"name": "Ven By Route Us v1 Venues Route Query Post",
					"value": "Ven By Route Us v1 Venues Route Query Post",
					"action": "Retrieve all restricted public venues traversed by route.",
					"description": "Retrieve all restricted public venues intersected by route. Request body parameters are:\n* route: [GeoJSON Linestring](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the route. Max allowed length is 50 km.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/us/v1/venues/route-query"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /us/v1/venues/distance-query",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Restricted Public Venues"
					],
					"operation": [
						"Ven By Distance Us v1 Venues Distance Query Post"
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
						"Restricted Public Venues"
					],
					"operation": [
						"Ven By Distance Us v1 Venues Distance Query Post"
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
						"Restricted Public Venues"
					],
					"operation": [
						"Ven By Distance Us v1 Venues Distance Query Post"
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
						"Restricted Public Venues"
					],
					"operation": [
						"Ven By Distance Us v1 Venues Distance Query Post"
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
						"Restricted Public Venues"
					],
					"operation": [
						"Ven By Distance Us v1 Venues Distance Query Post"
					]
				}
			}
		},
		{
			"displayName": "POST /us/v1/venues/polygon-query",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Restricted Public Venues"
					],
					"operation": [
						"Ven By Poly Us v1 Venues Polygon Query Post"
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
						"Restricted Public Venues"
					],
					"operation": [
						"Ven By Poly Us v1 Venues Polygon Query Post"
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
						"Restricted Public Venues"
					],
					"operation": [
						"Ven By Poly Us v1 Venues Polygon Query Post"
					]
				}
			}
		},
		{
			"displayName": "POST /us/v1/venues/route-query",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Restricted Public Venues"
					],
					"operation": [
						"Ven By Route Us v1 Venues Route Query Post"
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
						"Restricted Public Venues"
					],
					"operation": [
						"Ven By Route Us v1 Venues Route Query Post"
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
						"Restricted Public Venues"
					],
					"operation": [
						"Ven By Route Us v1 Venues Route Query Post"
					]
				}
			}
		},
];
