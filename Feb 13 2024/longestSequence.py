def longest_sequence(nums):
    sequence = 1
    longest_sequence = {}

    for i in range(len(nums) - 1):
        if nums[i] < nums[i + 1]:
            sequence+=1
        else:
            if sequence in longest_sequence:
                longest_sequence[sequence] +=1
            else:
                longest_sequence[sequence] = 1
            
            sequence = 1

    max_item = max(longest_sequence, key=longest_sequence.get) 
    max_count = longest_sequence[max_item]
    return max_count

my_list = [1, 2, 3, 2, 1, 3, 4, 0, 2]
print(longest_sequence(my_list))
