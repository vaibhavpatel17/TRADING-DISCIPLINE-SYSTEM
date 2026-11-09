from tools.requirement_spec import request1 #since the file is inside tools folder 
def validate_requirements(request):
    errors=[]
    if not request.objective:
        return["please describe what you want to build"]
    return[]#return empty list if the objective is not empty 
validate_requirements(request1)
print(validate_requirements(request1))