#Recursive Merge sort implementation for two sorted lists 

def merge_sort(l, r, a=[])
  # When both lists are empty return the merged array
  if l.empty? && r.empty?
    return a
  end
  # If one list is empty then add the remaining list to the end of the merged array and return that array 
  if l.empty?
    a.concat(r)
    return a
  elsif r.empty?
    a.concat(l)
    return a
  end
  # Compare elements at 0th index
  # Append the lesser integer to the merged array
  # If elements are equal append the 0th index from the right array to the merged array
  l[0] >= r[0] ? a << r.shift : a << l.shift
  # Recursive call to merge_sort
  merge_sort(l,r,a)
end

# Sorted lists
left = [-1,3,7,8,12,45]
right = [-3,-2,5,7,10,11,12,34,56,78]

merge_sort(left,right)