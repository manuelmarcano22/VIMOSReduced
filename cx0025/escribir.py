center = 130
filename = 'database/apVI_SEXM_577734_2011-06-24T05_56_42.518_G475_MR_402230_Q4_hi' 
with open(filename) as f:
	for lines in f:
		if 'center' in lines:
	    		numero = lines.split()[2]
	    	        break

with open(filename) as f:
	filedata = f.read()
print numero
filedata = filedata.replace(numero,center)

with open(filename,'w') as f:
	f.write(filedata)
