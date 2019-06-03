#include <vector>
#include <iostream>
using namespace std;
vector<int> twoNumberSum(vector<int> array, int targetSum)
{
    for (int i = 0; i < array.size() - 1; i++)
    {
        int firstNum = array[i];
        for (int j = i+1; j < array.size(); j++)
        {
            int secondNum =array[j];
            if (array[i] + array[j] == targetSum)
            {
                return firstNum > secondNum ? vector<int> (secondNum,firstNum):vector<int> (firstNum,secondNum);
            }
        }
    }
    return {};
}

int main()
{
    vector<int> array =[3, 5, -4, 8, 11, 1, -1, 6];
    int target =10;

    cout << twoNumberSum(array,target);
    return 0;
}