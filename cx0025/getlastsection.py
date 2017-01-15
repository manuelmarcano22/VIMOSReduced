#!/usr/bin/python2

from astropy.io import fits
import numpy as np

ssem = fits.open('VI_SSEM_577734_2011-06-24T05:56:42.518_G475_MR_402230_Q4_hi.fits')
header1 = ssem[0].header
header1['NAXIS2'] = 1

yrange=[180,210]
ssemdata = ssem[0].data[yrange[0]:yrange[1],:]
mediannorm = [ i/np.max(ssemdata) for i in np.median(ssemdata,axis=0)]  

fits.writeto('yrange'+str(yrange[0])+','+str(yrange[1])+'median.fits', np.median(ssemdata, axis=0)  ,header1)  
fits.writeto('yrange'+str(yrange[0])+','+str(yrange[1])+'mediannorm.fits', mediannorm  ,header1)
