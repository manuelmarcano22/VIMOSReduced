#!/bin/python2
"""
2016-12-28 
It generates regions files from the pre-images and the spectra from slit definitions in MASK coordinates (spectra file), and the transformation coefficients to convert from mask to CCD coordinates. Details on these transformations can be found in. 
http://www.eso.org/observing/dfo/quality/VIMOS/qc/mask2ccd_qc1.html
"""
import numpy as np
from astropy.io import fits
import glob, os


# Read file CX sources. 
filetwo = "../idradectotal.dat"
gbsid = []
racxo = []
deccxo = []

with open(filetwo) as file:
	for line in file:
		gbsid = line.split()[0]
		racxo = line.split()[1]
		deccxo = line.split()[2]
		
		rracxo = np.pi * float(racxo) /180.
		rdeccxo = np.pi * float(deccxo) /180.
		
		# loop in different quadrant
		for i in glob.glob('VI_SSEM_*Q[1-4]*'):
			quad = i.split('_')[-2]
			OBsp = i.split('_')[2]
			preimage = glob.glob('VI_SREI_*'+quad+'*')[0]
			print(preimage)

		


		






