setwd("~/Desktop")

library(XML)

#the url we are scraping
url <- "http://myprocurement.treasury.gov.my/templates/theme427/keputusantender_arkib.php?sort=&by=&page="

# initialize empty data
out <- NULL

for (i in 1:889) {

	print(i)

	url2 <- paste0(url,i, sep="")	

	page <- htmlParse(url2)

	row1 <- sapply(getNodeSet(page, "//table[4]/tr//td[1]"), xmlValue)
	row2 <- sapply(getNodeSet(page, "//table[4]/tr//td[2]"), xmlValue)
	row3 <- sapply(getNodeSet(page, "//table[4]/tr//td[3]"), xmlValue)
	row4 <- sapply(getNodeSet(page, "//table[4]/tr//td[4]"), xmlValue)
	row5 <- sapply(getNodeSet(page, "//table[4]/tr//td[5]"), xmlValue)
	row6 <- sapply(getNodeSet(page, "//table[4]/tr//td[6]"), xmlValue)
	row7 <- sapply(getNodeSet(page, "//table[4]/tr//td[7]"), xmlValue)
	row8 <- sapply(getNodeSet(page, "//table[4]/tr//td[8]"), xmlValue)
	row9 <- sapply(getNodeSet(page, "//table[4]/tr//td[9]"), xmlValue)
	row10 <- sapply(getNodeSet(page, "//table[4]/tr//td[10]"), xmlValue)

	df <- data.frame(row1, row2, row3, row4, row5, row6, row7, row8, row9, row10)
	out <- rbind(out,df)
}

out2 <- subset(out, row1!="Bil.")

save(out2, file="out.Rdata") 

write.csv(out2, file="contracts-table2.csv") 




