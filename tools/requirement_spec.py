from pydantic import BaseModel
class requirementspec(BaseModel):
    request_id:int 
    category:str
#request id and category are the 2 structures we need in this class 
request1=requirementspec(
    request_id=100,
    category="scalping"
)
#accessing the object 
