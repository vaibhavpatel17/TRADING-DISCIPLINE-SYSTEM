from pydantic import BaseModel,Field
from enum import Enum #enum is a built in python module 
class FeatureCategory(Enum):#DEFINES A PREDEFINED COLLECTION OF NAMED VALUES 
    STRATEGY = "strategy"
    INDICATOR = "indicator"
    DASHBOARD = "dashboard"
    BACKTESTING = "backtesting"
    ALERTS = "alerts"
    RISK_MANAGEMENT = "risk_management"
    CUSTOM_FEATURE = "custom_feature"
#we use enums memeber name in capital by convention 
class requirementspec(BaseModel):
    request_id:int 
    category:FeatureCategory#before having the featurecategory this member accepted anything which is 
    #that means we have integrated pydantic which checks the data whenever we create an object 
    objective:str
    functional_req:list[str] = Field(default_factory=list) #create list which should stores text  values and store it 
#request id and category are the 2 structures we need in this class 
    inputs:list[str] = Field(default_factory=list)
    expected_outputs:list[str] = Field(default_factory=list)
    constraints:list[str] = Field(default_factory=list)
    unresolved_questions:list[str] = Field(default_factory=list)
    #always use colon while declaring the expected data type 
    status:str="NEEDS_CLARIFICATION"
    #and use only while assiging values 
#Field(default_factory=list)==>this means even even the traders gives the above fields empty 
#this automatically creates an empty list instead of rejecting the entire request
request1=requirementspec(
    request_id=100,
    category=FeatureCategory.STRATEGY,
    functional_req=["indentify fvg","detect liquidity sweeps","confirm market structure"],
    objective=""
)
#accessing the object 
print(request1)#print the entire object which includes all the nine fields 
print(request1.request_id)
print(request1.category)
print(request1.objective)