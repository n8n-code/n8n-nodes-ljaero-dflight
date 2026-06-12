import type { INodeProperties } from 'n8n-workflow';

export const airspaceDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Airspace"
					]
				}
			},
			"options": [
				{
					"name": "Asp By Distance Us v1 Airspace Distance Query Post",
					"value": "Asp By Distance Us v1 Airspace Distance Query Post",
					"action": "Retrieve all requested types of airspace located within given distance of location.",
					"description": "Retrieve selected types of airspace existing within given distance from a point. Request body parameters are:\n* latitude:  WGS84 latitude coordinate of your selected point, in decimal degrees\n* longitude:  WGS84 longitude coordinate of your selected point, in decimal degrees\n* distance:  distance in meters (max allowed value is 25000)\n* asptypes:  list of one or more airspace types you wish to retrieve. Allowed values are 'CAS', 'SUA', 'MAA', and 'MTR'.\n\nSuccessful requests return a list of GeoJSON FeatureCollections, one for each Airspace type indicated in the request. Within each feature collection, there will be a separate Feature for each Airspace instance found. All Features will include a property indicating the *airspace_type*. Additional properties for each *airspace_type* are as follows:\n* CAS (Controlled Airspace)\n    - *name*\n    - *cas_class*: B, C, D, or E2\n    - *floor*: integer value in ft MSL\n    - *ceiling*: integer value in ft MSL\n    - *lannc*: true/false indicating whether or not authorization for this airspace may be obtained via LAANC\n* SUA (Special Use Airspace)\n    - *name*\n    - *sua_type*: AA = Alert Area, MOA = Military Operations Area, NSA = National Security Area, PA = Prohibited Area, RA = Restricted Area, WA = Warning Area\n    - *floor*: lower limit of the airspace\n    - *floor_uom*: unit of measure used for the numeric floor value: FT (feet) or FL (flight level)\n    - *floor_ref*: reference level used for the numeric floor value: AGL, MSL, or STD (standard atmosphere, used for flight level values)\n    - *ceiling*: upper limit of the airspace\n    - *ceiling_uom*: unit of measure used for the numeric floor value: FT (feet) or FL (flight level)\n    - *ceiling_ref*: reference level used for the numeric ceiling value: AGL, MSL, or STD (standard atmosphere, used for flight level values)\n* MAA (Miscellaneous Activity Area)\n    - *name*\n    - *maa_type*: one of the following - ULTRALIGHT, PARACHUTE JUMP AREA, AEROBATIC PRACTICE, GLIDER, HANG GLIDER, SPACE LAUNCH ACTIVITY\n    - *use_times*: textual description of days/times when activity in the area should be expected\n* MTR (Military Training Route)\n    - *name*\n    - *use_times*: textual description of days/times when MTR is active/hot\n    - *terrain_following*: boolean value indicating whether terrain following activity occurs on the route\n    - *max_extent_nm*: maximum distance that aircraft can deviate from route centerline",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/us/v1/airspace/distance-query"
						}
					}
				},
				{
					"name": "Asp By Poly Us v1 Airspace Polygon Query Post",
					"value": "Asp By Poly Us v1 Airspace Polygon Query Post",
					"action": "Retrieve all requested types of airspace located within given GeoJSON Polygon.",
					"description": "Retrieve selected types of airspace located within given area. Request body parameters are:\n* poly:  [GeoJSON Polygon](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the area. Max allowed area is 1000 km^2.\n* asptypes:  list of one or more airspace types you wish to retrieve. Allowed values are 'CAS', 'SUA', 'MAA', and 'MTR'.\n\nSuccessful requests return a list of GeoJSON FeatureCollections, one for each Airspace type indicated in the request. Within each feature collection, there will be a separate Feature for each Airspace instance found. All Features will include a property indicating the *airspace_type*. Additional properties for each *airspace_type* are as follows:\n* CAS (Controlled Airspace)\n    - *name*\n    - *cas_class*: B, C, D, or E2\n    - *floor*: integer value in ft MSL\n    - *ceiling*: integer value in ft MSL\n    - *lannc*: true/false indicating whether or not authorization for this airspace may be obtained via LAANC\n* SUA (Special Use Airspace)\n    - *name*\n    - *sua_type*: AA = Alert Area, MOA = Military Operations Area, NSA = National Security Area, PA = Prohibited Area, RA = Restricted Area, WA = Warning Area\n    - *floor*: lower limit of the airspace\n    - *floor_uom*: unit of measure used for the numeric floor value: FT (feet) or FL (flight level)\n    - *floor_ref*: reference level used for the numeric floor value: AGL, MSL, or STD (standard atmosphere, used for flight level values)\n    - *ceiling*: upper limit of the airspace\n    - *ceiling_uom*: unit of measure used for the numeric floor value: FT (feet) or FL (flight level)\n    - *ceiling_ref*: reference level used for the numeric ceiling value: AGL, MSL, or STD (standard atmosphere, used for flight level values)\n* MAA (Miscellaneous Activity Area)\n    - *name*\n    - *maa_type*: one of the following - ULTRALIGHT, PARACHUTE JUMP AREA, AEROBATIC PRACTICE, GLIDER, HANG GLIDER, SPACE LAUNCH ACTIVITY\n    - *use_times*: textual description of days/times when activity in the area should be expected\n* MTR (Military Training Route)\n    - *name*\n    - *use_times*: textual description of days/times when MTR is active/hot\n    - *terrain_following*: boolean value indicating whether terrain following activity occurs on the route\n    - *max_extent_nm*: maximum distance that aircraft can deviate from route centerline",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/us/v1/airspace/polygon-query"
						}
					}
				},
				{
					"name": "Asp By Route Us v1 Airspace Route Query Post",
					"value": "Asp By Route Us v1 Airspace Route Query Post",
					"action": "Retrieve all requested types of airspace traversed by route.",
					"description": "Retrieve selected types of airspace traversed by route. Request body parameters are:\n* route:  [GeoJSON Linestring](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the route. Max allowed length is 50 km.\n* asptypes:  list of one or more airspace types you wish to retrieve. Allowed values are 'CAS', 'SUA', 'MAA', and 'MTR'.\n\nSuccessful requests return a list of GeoJSON FeatureCollections, one for each Airspace type indicated in the request. Within each feature collection, there will be a separate Feature for each Airspace instance found. All Features will include a property indicating the *airspace_type*. Additional properties for each *airspace_type* are as follows:\n* CAS (Controlled Airspace)\n    - *name*\n    - *cas_class*: B, C, D, or E2\n    - *floor*: integer value in ft MSL\n    - *ceiling*: integer value in ft MSL\n    - *lannc*: true/false indicating whether or not authorization for this airspace may be obtained via LAANC\n* SUA (Special Use Airspace)\n    - *name*\n    - *sua_type*: AA = Alert Area, MOA = Military Operations Area, NSA = National Security Area, PA = Prohibited Area, RA = Restricted Area, WA = Warning Area\n    - *floor*: lower limit of the airspace\n    - *floor_uom*: unit of measure used for the numeric floor value: FT (feet) or FL (flight level)\n    - *floor_ref*: reference level used for the numeric floor value: AGL, MSL, or STD (standard atmosphere, used for flight level values)\n    - *ceiling*: upper limit of the airspace\n    - *ceiling_uom*: unit of measure used for the numeric floor value: FT (feet) or FL (flight level)\n    - *ceiling_ref*: reference level used for the numeric ceiling value: AGL, MSL, or STD (standard atmosphere, used for flight level values)\n* MAA (Miscellaneous Activity Area)\n    - *name*\n    - *maa_type*: one of the following - ULTRALIGHT, PARACHUTE JUMP AREA, AEROBATIC PRACTICE, GLIDER, HANG GLIDER, SPACE LAUNCH ACTIVITY\n    - *use_times*: textual description of days/times when activity in the area should be expected\n* MTR (Military Training Route)\n    - *name*\n    - *use_times*: textual description of days/times when MTR is active/hot\n    - *terrain_following*: boolean value indicating whether terrain following activity occurs on the route\n    - *max_extent_nm*: maximum distance that aircraft can deviate from route centerline",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/us/v1/airspace/route-query"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /us/v1/airspace/distance-query",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Airspace"
					],
					"operation": [
						"Asp By Distance Us v1 Airspace Distance Query Post"
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
						"Airspace"
					],
					"operation": [
						"Asp By Distance Us v1 Airspace Distance Query Post"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Asptypes",
			"name": "asptypes",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "asptypes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Airspace"
					],
					"operation": [
						"Asp By Distance Us v1 Airspace Distance Query Post"
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
						"Airspace"
					],
					"operation": [
						"Asp By Distance Us v1 Airspace Distance Query Post"
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
						"Airspace"
					],
					"operation": [
						"Asp By Distance Us v1 Airspace Distance Query Post"
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
						"Airspace"
					],
					"operation": [
						"Asp By Distance Us v1 Airspace Distance Query Post"
					]
				}
			}
		},
		{
			"displayName": "POST /us/v1/airspace/polygon-query",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Airspace"
					],
					"operation": [
						"Asp By Poly Us v1 Airspace Polygon Query Post"
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
						"Airspace"
					],
					"operation": [
						"Asp By Poly Us v1 Airspace Polygon Query Post"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Asptypes",
			"name": "asptypes",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "asptypes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Airspace"
					],
					"operation": [
						"Asp By Poly Us v1 Airspace Polygon Query Post"
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
						"Airspace"
					],
					"operation": [
						"Asp By Poly Us v1 Airspace Polygon Query Post"
					]
				}
			}
		},
		{
			"displayName": "POST /us/v1/airspace/route-query",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Airspace"
					],
					"operation": [
						"Asp By Route Us v1 Airspace Route Query Post"
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
						"Airspace"
					],
					"operation": [
						"Asp By Route Us v1 Airspace Route Query Post"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Asptypes",
			"name": "asptypes",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "asptypes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Airspace"
					],
					"operation": [
						"Asp By Route Us v1 Airspace Route Query Post"
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
						"Airspace"
					],
					"operation": [
						"Asp By Route Us v1 Airspace Route Query Post"
					]
				}
			}
		},
];
