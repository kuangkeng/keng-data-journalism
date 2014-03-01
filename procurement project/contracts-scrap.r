url="http://myprocurement.treasury.gov.my/templates/theme427/keputusantender_arkib.php?sort=&by=&page="
out=NULL
for (i in 1:880) {
url2=paste0(url,i)	
page = readHTMLTable(url2)[[1]]
out=rbind(out,page)
print(i)

}
write.csv(out,file="~/desktop/contracts-table.csv")