function algorithm(nums) {
    i=0
    check=true
    list=[]
    first=nums[0]
    track=nums[0]+1

    while(check) {
        if(nums[i]+1 != track) {
            if(nums[i] == undefined) {
                check=false
            }
            last=nums[i]
            first=nums[i+1]
            console.log(nums)
        }
        
        i = i+1
        track=nums[i]+1
    }
}

example = [0,1,2,4,5,7,8]
algorithm(example)