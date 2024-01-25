1. create kro context ko rfce and createcontext ke through
-- usercontext.Provider se wrap karo aur , value pass kro
2. wrap kro usi file name se ,, main ya top level ki file se ,, us context file ko
3. consume the context





react redux:
store: bada box ya container jisme sab kuch hai
state: current value ya initial state of data 
action: like task or meessege like  -- increse 1 item in cart
payload : actual instruction

reducer : function jo task krte hai
createslice: piece of store




1. phle data ke liye slice banao
2. slice ko store ke andr reducer bana ke dalo
3. main file top level ki file me wrap kro -- Provider se usme store pass kr do


useDispatch  -- action ko redux store me bhejna
useSelector -- read krna data ko
