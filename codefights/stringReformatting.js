// The string s contains dashes that split it into groups of characters. You are given an integer k that represents the number of characters in groups that your output should have. Your goal is to return a new string that breaks s into groups with a length of k by placing dashes at the correct intervals. If necessary, the first group of characters can be shorter than k. It is guaranteed that there are no consecutive dashes in s.

// Example

// For s = "2-4a0r7-4k" and k = 4, the output should be
// stringReformatting(s, k) = "24a0-r74k";

// The input string "2-4a0r7-4k" is split into three groups with lengths of 1, 5 and 2. Since k = 4, you need to split the string into two groups of 4 characters each, making the output string "24A0-R74k".

// For s = "2-4a0r7-4k" and k = 3, the output should be
// stringReformatting(s, k) = "24-a0r-74k".

// Given the same input string and k = 3, split the string into groups of 2, 3, and 3 characters to get the output string of "24-a0r-74k".


def stringReformatting(s, k)
    str = s.reverse.split('')
    str.delete('-')
    result = ""
    count = 0
    str.length.times do |i| 
        if count == k
            result = str[i] + '-' + result
            count = 1
        else
            result = str[i] + result
            count += 1
        end
    end
    result
end