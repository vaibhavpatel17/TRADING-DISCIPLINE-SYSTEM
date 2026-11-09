from tools.requirement_spec import request1,FeatureCategory#since the file is inside tools folder 
def validate_requirements(request):
    errors=[] #using errors list so that we can collect the errors in one execution itself 
    if not request.objective:   #if objective is empty print the following block 
                                #if the objective is not empty then its false 
         errors.append("empty objective")
        #return empty list if the objective is not empty 
     #we have to include this return to see what is inside the erros list 
    if request.category == FeatureCategory.STRATEGY and not request.inputs:
        errors.append("empty inputs")
    if not request.functional_req:
        errors.append("missing functional requirements")
    
    return errors
validate_requirements(request1)