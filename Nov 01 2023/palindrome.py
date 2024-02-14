
def palindrome(num):
    x = str(num)
    return x==x[::-1]

print(palindrome(1234))