- WebAPI interface is defined in classes in Controllers folder.
- Angluar views are in the Views folder.
- Angular scripts are in Scripts/Angular folder.
- Add your FRED(r) api key to appSettings in web.config.

This solution shows basic consumption of the FRED(r) api toolkit. Not all 
fields are shown on the pages, but all fields that are part of the api are 
available (see the "JSON" link on each page). These can be added to the 
template pages as desired.

Only general error handling is included; validation error handling can be added
if desired, as this information is returned from each api call.
