import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { airspaceDescription } from './resources/airspace';
import { weatherDescription } from './resources/weather';
import { flightRestrictionsDescription } from './resources/flight-restrictions';
import { specialSecurityAreasDescription } from './resources/special-security-areas';
import { restrictedPublicVenuesDescription } from './resources/restricted-public-venues';
import { surfaceObstaclesDescription } from './resources/surface-obstacles';
import { aerodromesDescription } from './resources/aerodromes';
import { uasOperatingAreasDescription } from './resources/uas-operating-areas';

export class LjaeroDflight implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Ljaero Dflight',
                name: 'N8nDevLjaeroDflight',
                icon: { light: 'file:./ljaero-dflight.png', dark: 'file:./ljaero-dflight.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'DFlight API provides real-time data for UAV preflight compliance via separate endpoints.',
                defaults: { name: 'Ljaero Dflight' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevLjaeroDflightApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Airspace",
					"value": "Airspace",
					"description": "#### Information is available for the following types of airspace:\n* **Controlled Airspace (CAS):** Class B, C, D, E2 airspace names, boundaries, altitude information, and LAANC availability\n* **Special Use Airspace (SUA):** Names, boundaries, and altitude information for the following types of Special Use Airspace:\n    - Alert Areas (AA)\n    - Military Operations Areas (MOA)\n    - National Security Areas (NSA)\n    - Prohibited Areas (PA)\n    - Restricted Areas (RA)\n    - Warning Areas (WA)\n* **Miscellaneous Activity Areas (MAA):** Names and boundary information for the following types of Miscellaneous Activity Areas:\n    - Aerobatic Practice Areas (AEROBATIC PRACTICE)\n    - Glider Operations Areas (GLIDER)\n    - Hang Glider Operations Areas (HANG GLIDER)\n    - Parachute Jump Areas (PARACHUTE JUMP AREA)\n    - Space Launch Activity Areas (SPACE LAUNCH ACTIVITY)\n* **Military Training Routes (MTR):** Names, route geometry, usage times, and corridor width information for both VFR and IFR Military Training Routes"
				},
				{
					"name": "Weather",
					"value": "Weather",
					"description": "#### Hourly forecast values for the following flight-impacting weather elements:\n* Cloud Ceiling (CIG)\n* Dewpoint Temperature (DEWPT)\n* Cloud Cover (SKY)\n* Air Temperature (TEMP)\n* Visibility (VIS)\n* Wind Direction (WINDDIR)\n* Wind Speed (WINDSPEED)\n* Wind Gust Speed (WINDGUST)"
				},
				{
					"name": "Flight Restrictions",
					"value": "Flight Restrictions",
					"description": "#### Temporary Flight Restrictions (TFRs) define areas restricting air operations (including drone operations) due to hazardous conditions, special events, or other safety/security reasons.\nAll published/active TFRs in specified area will be included in the response. Check the startDateTime and endDateTime properties to determine whether or not the restriction is applicable during your planned time of operation. In case of a TFR in your area of intended operation, you might still be able to fly by obtaining a via waiver through the [Special Governmental Interest (SGI) process](https://www.faa.gov/uas/advanced_operations/emergency_situations)."
				},
				{
					"name": "Special Security Areas",
					"value": "Special Security Areas",
					"description": "#### Locations where all UAS flight operations are prohibited unless prior FAA authorization has been obtained, and coordination with the controlling agency has taken place.\nThrough agreements with the Department of Defense and other U.S. security and intelligence agencies, the FAA published these restrictions as [FDC NOTAM 1/0488](https://tfr.faa.gov/save_pages/detail_1_0488.html) (and it's predecessors). Unlike other NOTAMs designated as [Temporary Flight Restrictions](https://dflight-api.ljaero.com/#/Flight%20Restrictions), these remain in effect 24 hours a day, 7 days a week, until further announcement."
				},
				{
					"name": "Restricted Public Venues",
					"value": "Restricted Public Venues",
					"description": "#### Areas where drone operations may be restricted or prohibited:\n* Lands administered by the National Park Service (prohibited at all times)\n* Major League Baseball Stadiums (prohibited within a 3 NM radius 1 hr before - 1 hr after game)\n* National Football League Stadiums (prohibited within a 3 NM radius 1 hr before - 1 hr after game)\n* NCAA Division One Football Stadiums (prohibited within a 3 NM radius 1 hr before - 1 hr after game)\n* NASCAR Sprint Cup, Indy Car, and Champ Series races (prohibited within a 3 NM radius 1 hr before - 1 hr after race)"
				},
				{
					"name": "Surface Obstacles",
					"value": "Surface Obstacles",
					"description": "#### All known structures whose presence might interfere with airborne activity, as defined in [14 CFR Part 77.9](https://www.ecfr.gov/current/title-14/chapter-I/subchapter-E/part-77#77.9).\nThis information is updated daily and includes the following details:\n* Location\n* Type\n* Number of separate structures in case of a group\n* Height (in ft. AGL)\n* Lighting and other markings"
				},
				{
					"name": "Aerodromes",
					"value": "Aerodromes",
					"description": "#### Center points and contact information for all US landing facilities, including those with no associated controlled airspace:\n* Public and private airports\n* Public and private balloonports\n* Public and private gliderports\n* Public and private heliports\n* Public and private seaplane bases\n* Public and private ultralight bases"
				},
				{
					"name": "UAS Operating Areas",
					"value": "UAS Operating Areas",
					"description": "#### Areas where drone activity is scheduled to take place. \nUAS Operating Areas (UOAs) are published via [NOTAM](https://www.faa.gov/regulations_policies/orders_notices/index.cfm/go/document.information/documentID/1035053) to alert airspace users of unmanned aircraft activity in a given area and at a given time (singular or recurring)."
				}
			],
			"default": ""
		},
		...airspaceDescription,
		...weatherDescription,
		...flightRestrictionsDescription,
		...specialSecurityAreasDescription,
		...restrictedPublicVenuesDescription,
		...surfaceObstaclesDescription,
		...aerodromesDescription,
		...uasOperatingAreasDescription
                ],
        };
}
