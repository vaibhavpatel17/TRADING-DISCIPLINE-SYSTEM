from pydantic import BaseModel
class reqspec(BaseModel):
    request_id:int
    category:str
