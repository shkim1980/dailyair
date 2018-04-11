// The equation goes as following to get the EPA AQI

/** 
 *
 *
-------------------------------------------------------------
 O(sub(3)[ppm] per 8 hour  //OZONE 8HR
-------------------------------------------------------------
 low = 0.000 high = 0.054 -> good                               [ AQI 0   - 50  ]
 low = 0.055 high = 0.070 -> moderate                           [ AQI 51  - 100 ]
 low = 0.071 high = 0.085 -> Unhealthy for Sensitive Groups     [ AQI 101 - 150 ]
 low = 0.086 high = 0.105 -> Unhealthy                          [ AQI 151 - 200 ]
 low = 0.106 high = 0.200 -> Very Unhealthy                     [ AQI 201 - 300 ]
 > 0.200                  -> Hazardous                          [ AQI 301 - 500 ]
-------------------------------------------------------------   

-------------------------------------------------------------
 O(sub(3)[ppm] per 1 hour  //OZONE 1HR
-------------------------------------------------------------
 low = 0.125 high = 0.164 -> Unhealthy for Sensitive Groups     [ AQI 101 - 150 ]
 low = 0.165 high = 0.204 -> Unhealthy                          [ AQI 151 - 200 ]
 low = 0.205 high = 0.404 -> Very Unhealthy                     [ AQI 201 - 300 ]
 low = 0.405 high = 0.504 -> Hazardous                          [ AQI 301 - 400 ]
 low = 0.505 high = 0.604 -> Hazardous                          [ AQI 401 - 500 ]
-------------------------------------------------------------

-------------------------------------------------------------
 PM(sub(2.5)[MicroGram/m^3] per 24 hours //Atmospheric Particulate Matter
-------------------------------------------------------------
 low = 0.000 high = 12.00 -> good                               [ AQI 0   - 50  ]
 low = 12.10 high = 35.40 -> moderate                           [ AQI 51  - 100 ]
 low = 35.50 high = 55.40 -> Unhealthy for Sensitive Groups     [ AQI 101 - 150 ]
 low = 55.50 high = 150.4 -> Unhealthy                          [ AQI 151 - 200 ]
 low = 150.5 high = 250.4 -> Very Unhealthy                     [ AQI 201 - 300 ]
 low = 250.5 high = 350.4 -> Hazardous                          [ AQI 301 - 400 ]
 low = 350.5 high = 500.4 -> Hazardous                          [ AQI 401 - 500 ]
-------------------------------------------------------------

-------------------------------------------------------------
 PM(sub(10)[MicroGram/m^3] per 24 hours //Atmospheric Particulate Matter
-------------------------------------------------------------
 low = 0    high = 54   -> good                                 [ AQI 0   - 50  ]
 low = 55   high = 154  -> moderate                             [ AQI 51  - 100 ]
 low = 155  high = 254  -> Unhealthy for Sensitive Groups       [ AQI 101 - 150 ]
 low = 255  high = 354  -> Unhealthy                            [ AQI 151 - 200 ]
 low = 355  high = 424  -> Very Unhealthy                       [ AQI 201 - 300 ]
 low = 425  high = 504  -> Hazardous                            [ AQI 301 - 400 ]
 low = 505  high = 604  -> Hazardous                            [ AQI 401 - 500 ]
--------------------------------------------------------------

--------------------------------------------------------------
 CO[ppm] per 8 hours //Carbon Monoxide
-------------------------------------------------------------
 low = 0    high = 54   -> good                                 [ AQI 0   - 50  ]
 low = 55   high = 154  -> moderate                             [ AQI 51  - 100 ]
 low = 155  high = 254  -> Unhealthy for Sensitive Groups       [ AQI 101 - 150 ]
 low = 255  high = 354  -> Unhealthy                            [ AQI 151 - 200 ]
 low = 355  high = 424  -> Very Unhealthy                       [ AQI 201 - 300 ]
 low = 425  high = 504  -> Hazardous                            [ AQI 301 - 400 ]
 low = 505  high = 604  -> Hazardous                            [ AQI 401 - 500 ]
-------------------------------------------------------------------------------------------------------------------------
