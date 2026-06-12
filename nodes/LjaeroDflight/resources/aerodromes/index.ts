import type { INodeProperties } from 'n8n-workflow';

export const aerodromesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Aerodromes"
					]
				}
			},
			"options": [
				{
					"name": "Aerodromes By Distance Us v1 Aerodromes Distance Query Post",
					"value": "Aerodromes By Distance Us v1 Aerodromes Distance Query Post",
					"action": "Retrieve aerodromes within given distance of location.",
					"description": "Retrieve aerodromes within given distance of a point. Request body parameters are:\n* latitude:  WGS84 latitude coordinate of your selected point, in decimal degrees\n* longitude:  WGS84 longitude coordinate of your selected point, in decimal degrees\n* distance:  distance in meters (max allowed value is 25000)\n\nSuccessful requests return a GeoJSON FeatureCollection, with a separate Feature for each\nAerodrome found. All Features will include properties for the facility name, ident,\ntype, and operational status.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/us/v1/aerodromes/distance-query"
						}
					}
				},
				{
					"name": "Aerodromes By Poly Us v1 Aerodromes Polygon Query Post",
					"value": "Aerodromes By Poly Us v1 Aerodromes Polygon Query Post",
					"action": "Retrieve aerodromes located within given area.",
					"description": "Retrieve aerodromes located within given area. Request body parameters are:\n* poly:  [GeoJSON Polygon](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the area. Max allowed area is 1000 km^2.\n\nSuccessful requests return a GeoJSON FeatureCollection, with a separate Feature for each\nAerodrome found. All Features will include properties for the facility name, ident,\ntype, and operational status.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/us/v1/aerodromes/polygon-query"
						}
					}
				},
				{
					"name": "Aerodromes By Route Us v1 Aerodromes Route Query Post",
					"value": "Aerodromes By Route Us v1 Aerodromes Route Query Post",
					"action": "Retrieve aerodromes found along a route.",
					"description": "Retrieve aerodromes found along a route. Request body parameters are:\n* route: [GeoJSON Linestring](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the route. Max allowed length is 50 km.\n\nSuccessful requests return a GeoJSON FeatureCollection, with a separate Feature for each\nAerodrome found. All Features will include properties for the facility name, ident,\ntype, and operational status.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/us/v1/aerodromes/route-query"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /us/v1/aerodromes/distance-query",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Aerodromes"
					],
					"operation": [
						"Aerodromes By Distance Us v1 Aerodromes Distance Query Post"
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
						"Aerodromes"
					],
					"operation": [
						"Aerodromes By Distance Us v1 Aerodromes Distance Query Post"
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
						"Aerodromes"
					],
					"operation": [
						"Aerodromes By Distance Us v1 Aerodromes Distance Query Post"
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
						"Aerodromes"
					],
					"operation": [
						"Aerodromes By Distance Us v1 Aerodromes Distance Query Post"
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
						"Aerodromes"
					],
					"operation": [
						"Aerodromes By Distance Us v1 Aerodromes Distance Query Post"
					]
				}
			}
		},
		{
			"displayName": "POST /us/v1/aerodromes/polygon-query",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Aerodromes"
					],
					"operation": [
						"Aerodromes By Poly Us v1 Aerodromes Polygon Query Post"
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
						"Aerodromes"
					],
					"operation": [
						"Aerodromes By Poly Us v1 Aerodromes Polygon Query Post"
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
						"Aerodromes"
					],
					"operation": [
						"Aerodromes By Poly Us v1 Aerodromes Polygon Query Post"
					]
				}
			}
		},
		{
			"displayName": "POST /us/v1/aerodromes/route-query",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Aerodromes"
					],
					"operation": [
						"Aerodromes By Route Us v1 Aerodromes Route Query Post"
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
						"Aerodromes"
					],
					"operation": [
						"Aerodromes By Route Us v1 Aerodromes Route Query Post"
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
						"Aerodromes"
					],
					"operation": [
						"Aerodromes By Route Us v1 Aerodromes Route Query Post"
					]
				}
			}
		},
];
