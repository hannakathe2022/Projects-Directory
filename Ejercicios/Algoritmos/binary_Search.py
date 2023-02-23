
def binary_search(a,n_Obj):

    pos_Min=0
    pos_Max=len(a)-1
    i=0
    
    while pos_Min<=pos_Max:
        i+=1
        middle=(pos_Min+pos_Max)/2

        if a[middle]==n_Oj:
            return 'valor encontrado en {} pasos, en la posición {}.'.format(i,middle)
        if a[middle]>n_Obj:
            pos_Max=middle-1
        if a[middle]<n_Obj:
            pos_Min=middle+1
    return 'elemento no encontrado'
        
a=[1,4,7,5,11,41,65,20,84,15,26,96,14]
n_Oj=int(input('Ingrese el numero:'))

res=binary_search(a,n_Oj)
print(res)