import type { INodeProperties } from 'n8n-workflow';

export const weatherDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Weather"
					]
				}
			},
			"options": [
				{
					"name": "Wx By Distance Us v1 Wx Forecast Distance Query Post",
					"value": "Wx By Distance Us v1 Wx Forecast Distance Query Post",
					"action": "Retrieve forecast values within given distance of location for all requested weather elements and time periods.",
					"description": "Retrieve forecast values for selected weather elements and time period. Request body parameters are:\n* latitude:  WGS84 latitude coordinate of your selected point, in decimal degrees\n* longitude:  WGS84 longitude coordinate of your selected point, in decimal degrees\n* distance:  distance in meters (max allowed value is 25000)\n* wxtypes:  list of one or more weather forecast elements you wish to retrieve. Allowed values are \"CIG\", \"DEWPT\", \"SKY\", \"TEMP\", \"VIS\", \"WINDDIR\", \"WINDGUST\", \"WINDSPEED\".\n* hours:  number of hourly forecasts to return (1-24). For current hour only you should enter value of 1. To also retrieve values for each of the next n hours, enter n.\n\n\nThe response will consist of a GeoJSON FeatureCollection with one Feature for each forecast location found within requested area,\nproperties of which will include an ordered list of forecast values for each requested weather element, for each requested hour. Units for each element are as follows:\n* CIG: meters AGL\n* DEWPT: degrees Celsius\n* SKY: % cloud cover\n* TEMP: degrees Celsius\n* VIS: meters\n* WINDDIR: degrees true\n* WINDGUST: meters/sec\n* WINDSPEED: meters/sec",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/us/v1/wx-forecast/distance-query"
						}
					}
				},
				{
					"name": "Wx By Poly Us v1 Wx Forecast Polygon Query Post",
					"value": "Wx By Poly Us v1 Wx Forecast Polygon Query Post",
					"action": "Retrieve forecast values within given GeoJSON polygon for all requested weather elements and time periods.",
					"description": "Retrieve forecast values located within given area for requested weather elements and time period. Request body parameters are:\n* poly:  [GeoJSON Polygon](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the area. Max allowed area is 1000 km^2.\n* wxtypes:  list of one or more weather forecast elements you wish to retrieve. Allowed values are \"CIG\", \"DEWPT\", \"SKY\", \"TEMP\", \"VIS\", \"WINDDIR\", \"WINDGUST\", \"WINDSPEED\".\n* hours:  number of hourly forecasts to return (1-24). For current hour only you should enter value of 1. To also retrieve values for each of the next n hours, enter n.\n\n\nThe response will consist of a GeoJSON FeatureCollection with one Feature for each forecast location found within requested area,\nproperties of which will include an ordered list of forecast values for each requested weather element, for each requested hour. Units for each element are as follows:\n* CIG: meters AGL\n* DEWPT: degrees Celsius\n* SKY: % cloud cover\n* TEMP: degrees Celsius\n* VIS: meters\n* WINDDIR: degrees true\n* WINDGUST: meters/sec\n* WINDSPEED: meters/sec",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/us/v1/wx-forecast/polygon-query"
						}
					}
				},
				{
					"name": "Wx By Route Us v1 Wx Forecast Route Query Post",
					"value": "Wx By Route Us v1 Wx Forecast Route Query Post",
					"action": "Retrieve forecast values along a route for all requested weather elements and time periods.",
					"description": "Retrieve forecast values along route for requested weather elements and time period. Request body parameters are:\n* route:  [GeoJSON Linestring](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the route. Max allowed length is 50 km.\n* wxtypes:  list of one or more weather forecast elements you wish to retrieve. Allowed values are \"CIG\", \"DEWPT\", \"SKY\", \"TEMP\", \"VIS\", \"WINDDIR\", \"WINDGUST\", \"WINDSPEED\".\n* hours:  number of hourly forecasts to return (1-24). For current hour only you should enter value of 1. To also retrieve values for each of the next n hours, enter n.\n\n\nThe response will consist of a GeoJSON FeatureCollection with one Feature for each forecast location found within requested area,\nproperties of which will include an ordered list of forecast values for each requested weather element, for each requested hour. Units for each element are as follows:\n* CIG: meters AGL\n* DEWPT: degrees Celsius\n* SKY: % cloud cover\n* TEMP: degrees Celsius\n* VIS: meters\n* WINDDIR: degrees true\n* WINDGUST: meters/sec\n* WINDSPEED: meters/sec",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/us/v1/wx-forecast/route-query"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /us/v1/wx-forecast/distance-query",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Weather"
					],
					"operation": [
						"Wx By Distance Us v1 Wx Forecast Distance Query Post"
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
						"Weather"
					],
					"operation": [
						"Wx By Distance Us v1 Wx Forecast Distance Query Post"
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
						"Weather"
					],
					"operation": [
						"Wx By Distance Us v1 Wx Forecast Distance Query Post"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Hours",
			"name": "hours",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "hours",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Weather"
					],
					"operation": [
						"Wx By Distance Us v1 Wx Forecast Distance Query Post"
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
						"Weather"
					],
					"operation": [
						"Wx By Distance Us v1 Wx Forecast Distance Query Post"
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
						"Weather"
					],
					"operation": [
						"Wx By Distance Us v1 Wx Forecast Distance Query Post"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Wxtypes",
			"name": "wxtypes",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "wxtypes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Weather"
					],
					"operation": [
						"Wx By Distance Us v1 Wx Forecast Distance Query Post"
					]
				}
			}
		},
		{
			"displayName": "POST /us/v1/wx-forecast/polygon-query",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Weather"
					],
					"operation": [
						"Wx By Poly Us v1 Wx Forecast Polygon Query Post"
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
						"Weather"
					],
					"operation": [
						"Wx By Poly Us v1 Wx Forecast Polygon Query Post"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Hours",
			"name": "hours",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "hours",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Weather"
					],
					"operation": [
						"Wx By Poly Us v1 Wx Forecast Polygon Query Post"
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
						"Weather"
					],
					"operation": [
						"Wx By Poly Us v1 Wx Forecast Polygon Query Post"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Wxtypes",
			"name": "wxtypes",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "wxtypes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Weather"
					],
					"operation": [
						"Wx By Poly Us v1 Wx Forecast Polygon Query Post"
					]
				}
			}
		},
		{
			"displayName": "POST /us/v1/wx-forecast/route-query",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Weather"
					],
					"operation": [
						"Wx By Route Us v1 Wx Forecast Route Query Post"
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
						"Weather"
					],
					"operation": [
						"Wx By Route Us v1 Wx Forecast Route Query Post"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Hours",
			"name": "hours",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "hours",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Weather"
					],
					"operation": [
						"Wx By Route Us v1 Wx Forecast Route Query Post"
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
						"Weather"
					],
					"operation": [
						"Wx By Route Us v1 Wx Forecast Route Query Post"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Wxtypes",
			"name": "wxtypes",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "wxtypes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Weather"
					],
					"operation": [
						"Wx By Route Us v1 Wx Forecast Route Query Post"
					]
				}
			}
		},
];
