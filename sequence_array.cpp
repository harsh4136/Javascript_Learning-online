#include<iostream>
using namespace std;

int main(){

    int obj[] = {1,2,3,13,87,5,4,3,2,34,5,3,6,4,3,3,22,10,4,3,3,4};
    
   // cout<<sizeof(obj)<<endl;  
   // cout<<sizeof(int)<<endl;  //integer 
   // cout<<sizeof(obj) / sizeof(int)<<endl;  // length of arr

    for(int i=0 ; i < sizeof(obj)/sizeof(int);i++)
    {
        if(obj[i]<=5){
            cout<<obj[i]<<endl;
        }
    }

    return 0;
}