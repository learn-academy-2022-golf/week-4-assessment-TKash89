# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

#INPUT:  Variables num1 = 7 ;  num2 = 42  ; num3 = 221

#OUTPUT:  '7 is odd' ; '42 is even'  ; '221 is odd'       
                    ######      Determining if an integer is even or odd, my memory bring me back to using conditional 
                    #      statements to output the correct answer. This involves modulo two is equal to zero for even, and
                    # the same operation including the bang operator exclimation point. I chose to return the even number with
                    # an IF statement, and the else IF with the ODD outcome. 
                              # Although very straighforward, the terminal exclaims back with an "unexpected end-of-input", 
                    # highlighting the modulo operator. I'm pretty stuck after moving some syntax around          



num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

        def which_nums(num1, num2, num3)
            if num1 == %2 == 0 
                "#{num1}is even."  
              elsif num1 == %2 !== 0
                "#{num1}is odd"

            if num2 == %2 == 0 
                    "#{num2}is even."  
              elsif num2 == %2 !== 0
                    "#{num2}is odd"

            if num3 == %2 == 0 
                        "#{num3}is even."  
              elsif num3 == %2 !== 0
                        "#{num3}is odd"
            end
        end
    end
end
                p which_nums

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete
   
     # INPUT: beatles_album1, beatles_album2, beatles_album3
    # OUTPUT:'Rbbr Sl'; 'Sgt Pppr'; 'bby Rd'

                            ####Using the available resource, I use the .delete method along to try and eliminate 'a e i o u' 
                            # letters from each of the three variables. I attempted creating a block for this problem initially
                            # and could not get the right output. I changed my approach without much success. This is outputting
                            # the unchanged variable.


beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

          beatles_album1.delete 'aeiou'
          beatles_album2.delete 'aeiou'
          beatles_album3.delete 'aeiou' 
            
            puts beatles_album1, beatles_album2, beatles_album3




# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

    #####INPUT:palindrome_tester1, palindrome_tester2, palindrome_tester3
    ####OUTPUT:'Racecar is a palindrome';'LEARN is not a palindrome';'Rotator is a palindrome'

                            ####Creating this method I decide to use three IF conditional statements corresponding with
                            # the three provided variables. To check if palindrome_tester1 is a palindrome, I write that
                            # that IF the variable is equal to itself, reversed, it will return "is a palindrome."
                            # I create one conditional using the bang operator exclimation point to achieve the "not a 
                            # palindrome condition" for palindrome_tester2. palindrome_tester3 will be written in the same 
                            # manner as palindrome_tester1. Line 107, I print my created variable |palTst| to get the desired
                            #results.       This code does not seem to work and the terminal is stating that there is an
                            #unexpected end of input. I have check the quantity of "end(s)" and it appears they are all required.



palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def palTst(palindrome_tester1, palindrome_tester2, palindrome_tester3)
    if palindrome_tester1 == palindrome_tester1.reverse
        "#{palindrome_tester1}is a palindrome"
        
    if  palindrome_tester2 != palindrome_tester2.reverse
        "#{palindrome_tester2}is not a palindrome"

    if  palindrome_tester3 == palindrome_tester3.reverse
        "#{palindrome_tester3}is a palindrome"    
        end
       end
      end
     end
          p palTst