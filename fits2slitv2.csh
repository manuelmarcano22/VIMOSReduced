#!/bin/csh -f
alias MATH 'set \!:1 = `echo "\!:3-$" | bc -l`'

# This is v1.1 of fits2slit.csh 2014-May-08. Removing dependence to angular
# bya calculatin the separation between objects with an approximation or exact angular distance formula.
# Increased match radius from 3 to 5 arcsec
# It does not work in Linux. Likely issue with c-shell command. 
# This is v1.0 of fits2slit.csh  2014-May-04.

# Set pi = 3.1416...
MATH pi = a(1) * 4
# Read file with CX sources. Full list.Also converting deg to radains. 	
	set filetwo = "idradectotal.dat"
	set gbsid =  `awk '{print $1}' $filetwo `
	set racxo = `awk '{print $2}' $filetwo `
        set deccxo = `awk '{print $3}' $filetwo `
#
       echo Wait! Converting deg to radians... 
     	set cxonr = 1      	
      	while ($cxonr <= 1658) 
	    MATH rracxo = $pi * $racxo[$cxonr] /180 	  
	    MATH rdeccxo = $pi * $deccxo[$cxonr] /180
             set racxo[$cxonr] = $rracxo
             set deccxo[$cxonr] = $rdeccxo
# 	  echo $cxonr $racxo[$cxonr]
	 @ cxonr++
	end	
 
set quad = 1
while ($quad <= 4 )
echo QUADRANT $quad
#
# Set pre-image and spectroscoic OB name
set OBim = `awk 'BEGIN {FS=" "} ; {if($3=="OBS" && $4=="ID") print $6} '  preimgq{$quad}.lis `
set OBsp = `awk 'BEGIN {FS=" "} ; {if($3=="OBS" && $4=="ID") print $6} '  spq{$quad}.lis `
#
# Set from the pre-images the coefficients for the MASK to CCD coord. transformations.
# 
set x0 = `awk 'BEGIN {FS="'\''"} ; {if($1=="HIERARCH ESO PRO MASK CCD X0 = ") print $2} '  preimgq{$quad}.lis `
set y0 = `awk 'BEGIN {FS="'\''"} ; {if($1=="HIERARCH ESO PRO MASK CCD Y0 = ") print $2} '  preimgq{$quad}.lis `
set axx = `awk 'BEGIN {FS="'\''"} ; {if($1=="HIERARCH ESO PRO MASK CCD XX = ") print $2} '  preimgq{$quad}.lis `
set ayy = `awk 'BEGIN {FS="'\''"} ; {if($1=="HIERARCH ESO PRO MASK CCD YY = ") print $2} '  preimgq{$quad}.lis `
set axy = `awk 'BEGIN {FS="'\''"} ; {if($1=="HIERARCH ESO PRO MASK CCD XY = ") print $2} '  preimgq{$quad}.lis `
set ayx = `awk 'BEGIN {FS="'\''"} ; {if($1=="HIERARCH ESO PRO MASK CCD YX = ") print $2} '  preimgq{$quad}.lis `

echo ================================================
echo CCD to MASK coeff.
echo $x0, $y0, $axx, $ayy, $axy, $ayx
echo ================================================

echo global color=green dashlist=8 3 width=1 font=\"helvetica 10 normal\" select=1 highlite=1 dash=0 fixed=0 edit=1 move=1 delete=1 include=1 source=1 >> {$OBim}_{$OBsp}_Q{$quad}.reg
echo image >> {$OBim}_{$OBsp}_Q{$quad}.reg

set count_nslit = 1
#
# Set SLITS from spectroscoipc frames.
# Set number of slits:
set nslits = `awk 'BEGIN { FS = " " } ; { if($4=="SLIT" && $5=="NO") print $7} '  spq{$quad}.lis `
while ($count_nslit <= $nslits )
        echo ================================================
	echo "SLIT"$count_nslit  in QUADRANT $quad 
        echo ================================================
#Search slit parameters in adp files:
# xx is the lower x value in the slit.
# cx is the length of the slit.
#I assume that the slits are not tilted.
	set xx = `awk 'BEGIN { FS = " " } ; { if($4=="SLIT"'$count_nslit'"" && $6 =="XX") print $8} ' spq{$quad}.lis `
	set yy = `awk 'BEGIN { FS = " " } ; { if($4=="SLIT"'$count_nslit'"" && $6 =="YY") print $8} ' spq{$quad}.lis `
	set cx = `awk 'BEGIN { FS = " " } ; { if($4=="SLIT"'$count_nslit'"" && $6 =="CX") print $8} ' spq{$quad}.lis `
	
	echo xx=$xx, yy=$yy, cx=$cx
     
# Compute individual region parameters for ds9.
# These are for a non-titled slit. XC is the central coord.
# of the slit as required by ds9.
#        
	MATH xc = $xx + $cx / 2
	set yc = $yy
	set dx = $cx
#
# convert MASK coord. to CCD coords:
#
	MATH ccdxc = $axx * $xc + $axy * $yc + $x0
	MATH ccddx = $axx * $dx 
	MATH ccdyc = $ayx * $xc + $ayy * $yc + $y0   
#
# The slits are of a 1".0 width which is equivalente 
# to 1".0/(0".205/pix) pixels width (ccddy = 4.88).
#
	set ccddy = 4.88	
#	
# Search for CX number: and then make region file:
# First read RA,DEC for each slit from the spectroscopic file:
#
	set ra = `awk 'BEGIN { FS = " " } ; { if($4=="SLIT"'$count_nslit'"" && $6 =="RA") print $8} ' spq{$quad}.lis `   
	set dec = `awk 'BEGIN { FS = " " } ; { if($4=="SLIT"'$count_nslit'"" && $6 =="DEC") print $8} ' spq{$quad}.lis `
	echo slit ra=$ra, dec= $dec 
# Convert deg to rad:
	MATH ra = $pi * $ra /180 	
	MATH dec = $pi * $dec /180 	
           
# Search for the CXO source nearest to the slit.
# In the script a match occurs when the separation
# between the slit position and the CXO source is 
# less than 3 arcsec.
#
       	set cxonr = 1      	
      	while ($cxonr <= 1658) 
#		echo $cxonr, $racxo[$cxonr] $deccxo[$cxonr]
#              Computing separation (nearby) with program angular
#        	set nearby = `angular $ra $dec $racxo[$cxonr] $deccxo[$cxonr] | 
#              awk -F: '{print $4}' | cut -d.  -f1`
#
#              Computing separation (nearby) with 'bc -l'
#  
                MATH dra = $ra - $racxo[$cxonr] 
               # Next two lines. Computing arccos using arctan. 
#                MATH cnearby = s($dec) * s($deccxo[$cxonr]) + c($dec) *c($deccxo[$cxonr]) * c($dra) 
#		MATH nearby =  a(sqrt(1- $cnearby * $cnearby) / $cnearby) * ( 180 / $pi ) * 3600 
              # Next line: approximation for nearby sources:
                MATH nearby = sqrt(($dra * c(ra)) * ($dra * c(ra)) +  ($dec - $deccxo[$cxonr]) * ($dec - $deccxo[$cxonr]))  * ( 180 / $pi ) * 3600 

                set nearby = `echo $nearby | cut -d'.' -f1`
   #             echo $nearby
      		if ( $nearby < 7 && $nearby > -7) then 
			echo "box("$ccdxc,$ccdyc,$ccddx,$ccddy,"0)"  \#  font=\"helvetica 18 normal\"  text=\{$gbsid[$cxonr]\}  >> {$OBim}_{$OBsp}_Q{$quad}.reg
 		        echo GBS soruce $gbsid[$cxonr] 
		endif				
	 	@ cxonr++
	end	   		      
@ count_nslit++
end

@ quad++
end


