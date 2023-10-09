import * as React from "react";
import { useState, useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  IconX,
  IconCheck,
  IconSearch,
  IconChevronLeft,
} from "@tabler/icons-react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
//import "./exadd.scss";
import { UserContext } from "../../../context/UserIdContext";
import axios from "axios";
const EditExpenses = (props) => {
  const prefixSuggestions = [
    {
      option: "None",
    },
    {
      option: "Office",
    },
    {
      option: "Travel",
    },
  ];

  const { changeChange, change } = useContext(UserContext);
  const [result, setResult] = useState([]);
  const [result2, setResult2] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/exp/fetchExpenseCategory`)
      .then((response) => {
        setResult(response.data);
      });

    axios
      .get(`http://localhost:8000/api/exp/fetchExpenseList`)
      .then((response) => {
        setResult2(response.data);
      });
  }, [change]);

  const [isClicked, setIsClicked] = useState(false);
  const handleIsClicked = () => {
    setIsClicked(!isClicked);
  };

  const [searchValue, setSearchValue] = useState("");

  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  const current_date = `${month}/${date}/${year}`;
  const todaysDate = dayjs(current_date);
  const [transactionDate, setTransactionDate] = useState(todaysDate);

  var date1 = transactionDate.$d;
  var filteredDate = date1.toString().slice(4, 16);

  const [categoryName, setCategoryName] = useState("Add new category");
  //console.log("categoryName : ", categoryName, result);
  const [addNewCategories, setAddNewCategories] = useState(false);
  const [newCategoryValue, setNewCategoryValue] = useState("");
  const [editCategories, setEditCategories] = useState(false);
  const [updatedExpenseCategoryName, setUpdatedExpenseCategoryName] =
    useState("");
  const [ecid, setEcid] = useState(0);

  const [addPrefix, setAddPrefix] = useState(false);
  const [prefixValue, setPrefixValue] = useState("Add Prefix");
  const [temp, setTemp] = useState("");

  const [addExpenseItems, setAddExpenseItems] = useState(false);
  const [addNewExpenseItems, setNewAddExpenseItems] = useState(false);
  const [expenseList, setExpenseList] = useState("");
  const [price, setPrice] = useState(0);
  const [editExpenseItems, setEditExpenseItems] = useState(false);
  const [updatedExpenseItemName, setupdatedExpenseItemName] = useState("");
  const [updatedExpensePrice, setUpdatedExpensePrice] = useState("");
  const [selectedItems, setSelectedItems] = useState(false);

  const [addBtnActice, setAddBtnActice] = useState(false);

  const [prefixSelected, setprefixSelected] = useState(true);
  const prefixSelectorHandler = () => {
    setprefixSelected(!prefixSelected);
  };

  const [values2, setValues2] = useState({
    category_name: null,
  });

  values2.category_name = newCategoryValue;
  const handleClick2 = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:8000/api/exp/addExpenseCategory",
        values2
      );
      changeChange();
      props.snack();
    } catch (err) {
      console.log(err);
    }
  };

  const [values3, setValues3] = useState({
    expense_name: null,
    price: null,
  });

  values3.expense_name = expenseList;
  values3.price = price;

  const handleClick3 = async () => {
    //e.preventDefault();
    console.log(values3);
    try {
      await axios.post("http://localhost:8000/api/exp/addExpenselist", values3);
      changeChange();
      //props.snack();
    } catch (err) {
      console.log(err);
    }
  };

  const [values4, setValues4] = useState({
    expense_name: null,
    price: null,
  });
  values4.expense_name = updatedExpenseItemName;
  values4.price = updatedExpensePrice;
  const updateExpenseItemData = async (eiid) => {
    try {
      await axios.put(
        `http://localhost:8000/api/exp/updateExpenseItemData/${eiid}`,
        values4
      );
      changeChange();
      //props.snack();
    } catch (err) {
      console.log(err);
    }
  };

  const [values5, setValues5] = useState({
    category_name: null,
  });
  values5.category_name = updatedExpenseCategoryName;
  const updateExpenseCategoryData = async () => {
    try {
      console.log(values5);
      await axios.put(
        `http://localhost:8000/api/exp/updateExpenseCategoryData/${ecid}`,
        values5
      );
      changeChange();
      //props.snack();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteExpenseItemFromList = async (expenseItemId) => {
    try {
      console.log("expenseItemId :", expenseItemId);
      await axios.delete(
        `http://localhost:8000/api/exp/delExpenseItemFromList/${expenseItemId}`
      );
      changeChange();
      //props.snackd();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteExpenseCategory = async (expenseCategoryId) => {
    try {
      console.log("expenseCategoryId :", expenseCategoryId);
      await axios.delete(
        `http://localhost:8000/api/exp/delExpenseCategory/${expenseCategoryId}`
      );
      changeChange();
      //props.snackd();
    } catch (err) {
      console.log(err);
    }
  };

  let sum = 0;

  const handleIncrease = (expenseItemId) => {
    console.log("item.id.... : ", expenseItemId),
      setResult2((result2) =>
        result2.map((item) =>
          expenseItemId === item.id
            ? { ...item, qty: item.qty + 1, total_price: item.qty * price }
            : item
        )
      );
  };

  const handleDecrease = (expenseItemId) => {
    console.log("item.id.... : ", expenseItemId),
      setResult2((result2) =>
        result2.map((item) =>
          expenseItemId === item.id && item.qty >= 1
            ? {
                ...item,
                qty: item.qty - 1,
                total_price: item.qty * item.price,
              }
            : item
        )
      );
  };

  const [list, setList] = useState({
    id: "",
    expense_name: "",
    price: "",
    qty: "",
    total_price: 0,
  });

  const handleContinue = () => {
    setList((list) =>
      result2.map((item) =>
        item.qty > 0
          ? {
              id: item.id,
              expense_name: item.expense_name,
              price: item.price,
              qty: item.qty,
              total_price: item.qty * item.price,
            }
          : list
      )
    );
  };

  const result3 = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].id !== "") {
      result3.push(list[i]);
    }
  }

  for (var i = 0; i < list.length; i++) {
    sum = parseInt(list[i].total_price) + parseInt(sum);
  }

  const [expenseData, setExpenseData] = useState({
    prefix_name: "",
    expense_date: "",
    category_name: "",
    amount_paid: sum,
    list: result3,
  });

  const handleChange = (e) => {
    setExpenseData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      (expenseData.list = result3), (expenseData.amount_paid = sum);
      expenseData.expense_date = filteredDate;
      expenseData.prefix_name = temp;
      expenseData.category_name = categoryName;
      console.log("values : ", expenseData, list);
      await axios.post(
        "http://localhost:8000/api/exp/addExpenses",
        expenseData
      );

      changeChange();
      props.snack();
    } catch (err) {
      console.log(err);
    }
  };

  const [submitDisabled, setSubmitDisabled] = useState(true);
  useEffect(() => {
    if (
      (expenseData.amount_paid !== "" || expenseData.amount_paid !== null,
      expenseData.amount_paid !== 0)
    ) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(false);
    }
  }, [expenseData.amount_paid]);

  return (
    <div>
      {addExpenseItems === false ? (
        <>
          <div>
            <Box
              sx={{
                width: 500,
              }}
            >
              <h1 className="text_left heading">Create an Expense</h1>

              <div className="add-expense-section-wrapper">
                <div className="section-2">
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "100%" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <Box className="box-sec ">
                      <Box className="sec-1 w-[50%] pt-2">
                        <TextField
                          id="outlined-basic"
                          variant="outlined"
                          value={prefixValue}
                          name="prefix_name"
                          //onChange={handleChange}
                          className=" w-[65%]"
                          required
                          onClick={() => setAddPrefix(true)}
                        />
                        <TextField
                          id="outlined-basic"
                          variant="outlined"
                          value={12}
                          name="prefix_number"
                          onChange={handleChange}
                          className=" w-[35%]"
                          required
                        />
                      </Box>
                      <Box className="sec-2 w-[50%]">
                        <LocalizationProvider
                          dateAdapter={AdapterDayjs}
                          className="pt-0"
                        >
                          <DemoContainer
                            components={["DatePicker", "DatePicker"]}
                          >
                            <DatePicker
                              label="Date"
                              value={todaysDate}
                              format="LL"
                              maxDate={todaysDate}
                              onChange={(e) => setTransactionDate(e)}
                            />
                          </DemoContainer>
                        </LocalizationProvider>
                      </Box>
                    </Box>
                    <Box>
                      {addPrefix ? (
                        <Box className=" border category p-3 ">
                          <div className="w-full ">
                            <TextField
                              label="Enter Prefix"
                              name="enter_prefix_name"
                              id="outlined-basic"
                              variant="outlined"
                              className="w-full "
                              size="small"
                              onChange={(e) => setTemp(e.target.value)}
                              required
                            />
                          </div>

                          <div>
                            <p className="py-3">Select from added prefixes </p>
                            <div className="flex gap-3">
                              {prefixSuggestions.map((item) => (
                                <p
                                  className={`border rounded-[10px] py-2 px-3 ${
                                    temp === item.option
                                      ? "selected_prefix"
                                      : ""
                                  }`}
                                  onClick={() => {
                                    setTemp(item.option);
                                    setPrefixValue(prefixSelectorHandler);
                                  }}
                                >
                                  {item.option}
                                </p>
                              ))}
                            </div>
                          </div>
                          <div className="w-full flex py-3 pt-5">
                            <div
                              className=" pr-6"
                              onClick={() => {
                                setPrefixValue(temp), setAddPrefix(false);
                              }}
                            >
                              <button className="text-green-600 bg-green-200 w-full py-3 px-5 rounded-[5px] hover:text-white hover:bg-green-600 transition-all ease-in">
                                Save
                              </button>
                            </div>
                            <div
                              className=""
                              onClick={() => setAddPrefix(false)}
                            >
                              <button className="text-red-600 bg-red-200 w-full py-3 px-5 rounded-[5px] hover:text-white hover:bg-red-600 transition-all ease-in">
                                Cancel
                              </button>
                            </div>
                          </div>
                        </Box>
                      ) : (
                        ""
                      )}
                    </Box>

                    <Box className="box-sec  ">
                      <TextField
                        id="outlined-read-only-input"
                        value={categoryName}
                        //helperText={hsnValue1}
                        className="w-full"
                        size="small"
                        InputProps={{
                          readOnly: true,
                        }}
                        onClick={() => {
                          //setIsClicked(true);
                          handleIsClicked();
                        }}
                      />
                    </Box>

                    <>
                      {isClicked ? (
                        <>
                          <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="Search By"
                            className=" my-0 z-0"
                            size="small"
                            placeholder="Category Name "
                            onChange={(e) => {
                              setSearchValue(e.target.value);
                            }}
                          />
                          {editCategories === false ? (
                            <div className="flex justify-between flex-row border category p-3 ">
                              <div onClick={() => setAddNewCategories(true)}>
                                Add New Category
                              </div>
                              <div
                                onClick={() => {
                                  setEditCategories(true),
                                    setIsClicked(true),
                                    setAddNewCategories(false);
                                }}
                              >
                                Edit
                              </div>
                            </div>
                          ) : (
                            <div className=" inline-block">
                              <button
                                onClick={() => setEditCategories(false)}
                                className="w-fit icon_check icon_back flex items-center justify-center py-2 px-2 pl-0 text-gray-600 bg-gray-200 rounded-[5px] hover:text-white hover:bg-gray-600 transition-all ease-in  "
                              >
                                <div>
                                  <IconChevronLeft className="fill-inherit" />
                                </div>
                                <div>Back</div>
                              </button>
                            </div>
                          )}
                          {addNewCategories ? (
                            <Box className="box-sec border category p-3">
                              <TextField
                                label="Enter Category Name"
                                name="enter-category-name"
                                id="outlined-basic"
                                variant="outlined"
                                className="w-full "
                                size="small"
                                onChange={(e) =>
                                  setNewCategoryValue(e.target.value)
                                }
                                required
                              />

                              <div
                                className="pl-3 icon_check"
                                onClick={handleClick2}
                              >
                                <IconCheck
                                  size={60}
                                  className=" text-green-600 fill-inherit"
                                />
                              </div>
                              <div
                                className="pl-3 icon_check"
                                onClick={() => setAddNewCategories(false)}
                              >
                                <IconX
                                  size={60}
                                  className="text-slate-600 fill-inherit"
                                />
                              </div>
                            </Box>
                          ) : (
                            ""
                          )}

                          {editCategories ? (
                            <Box className="box-sec border category p-3">
                              <TextField
                                label="Enter Category Name"
                                name="enter-category-name"
                                id="outlined-basic"
                                variant="outlined"
                                className="w-full "
                                size="small"
                                value={updatedExpenseCategoryName}
                                onChange={(e) =>
                                  setUpdatedExpenseCategoryName(e.target.value)
                                }
                                required
                              />

                              <div className="pl-3 icon_check">
                                <IconCheck
                                  size={60}
                                  className="text-green-600 fill-inherit"
                                  onClick={() => updateExpenseCategoryData()}
                                />
                              </div>
                              <div
                                className="pl-3 icon_check"
                                onClick={() => setEditCategories(false)}
                              >
                                <IconX size={60} className="text-slate-600" />
                              </div>
                            </Box>
                          ) : (
                            ""
                          )}

                          {result
                            .filter((code) =>
                              code.category_name.startsWith(searchValue)
                            )
                            .map((filteredItem) => (
                              <div
                                key={filteredItem.id}
                                className="category"
                                onClick={() => {
                                  setCategoryName(filteredItem.category_name);
                                  editCategories
                                    ? setIsClicked(true)
                                    : setIsClicked(false);
                                }}
                              >
                                {editCategories === false ? (
                                  <div className="cursor-pointer hover:bg-slate-100 p-3  w-full border border-t-0 ">
                                    <h2 className="">
                                      {filteredItem.category_name}
                                    </h2>
                                  </div>
                                ) : (
                                  <div className="cursor-pointer hover:bg-slate-100 p-3  w-full border border-t-0 flex justify-between items-center ">
                                    <div>
                                      <h2 className="">
                                        {filteredItem.category_name}
                                      </h2>
                                    </div>
                                    <div className="flex gap-4">
                                      <button
                                        onClick={(e) => {
                                          e.preventDefault(),
                                            //setCategoryName("Add New Categories")
                                            setUpdatedExpenseCategoryName(
                                              filteredItem.category_name
                                            ),
                                            setEcid(filteredItem.id);
                                          setIsClicked(true);
                                          console.log(
                                            "IsClicked : ",
                                            isClicked,
                                            filteredItem.category_name
                                          );
                                        }}
                                        className="text-blue-600 bg-blue-200  py-3 px-5 rounded-[5px] hover:text-white hover:bg-blue-600 transition-all ease-in"
                                      >
                                        Edit
                                      </button>
                                      <button
                                        onClick={(e) => {
                                          e.preventDefault(),
                                            //setupdatedExpenseItemName(filteredItem.category_name),

                                            deleteExpenseCategory(
                                              filteredItem.id
                                            );
                                        }}
                                        className="text-red-600 bg-red-200  py-3 px-5 rounded-[5px] hover:text-white hover:bg-red-600 transition-all ease-in"
                                      >
                                        Delete
                                      </button>
                                    </div>
                                  </div>
                                )}
                              </div>
                            ))}
                        </>
                      ) : (
                        ""
                      )}
                    </>

                    <Box className="border rounded-[4px]">
                      <div className="p-3">
                        <div className="flex justify-between">
                          <p className="text-slate-800 font-semibold text-xl pb-3">
                            Expense Item Details
                          </p>
                          {selectedItems ? (
                            <p
                              className="text-blue-600 font-semibold text-lg pb-3"
                              onClick={() => setAddExpenseItems(true)}
                            >
                              Edit List
                            </p>
                          ) : (
                            ""
                          )}
                        </div>
                        {selectedItems
                          ? list
                              .filter((i) => i.total_price > 0)
                              .map((item, index) => (
                                <div className="flex justify-between border-b p-3 ">
                                  <div>
                                    <p className="text-xl text-slate-600">
                                      {item.expense_name}
                                    </p>
                                    <p className="text-slate-500">
                                      {item.qty} x {item.price}
                                    </p>
                                  </div>
                                  <div>
                                    <p className=" font-[500] text-lg">
                                      ₹ {item.total_price}
                                    </p>
                                  </div>
                                </div>
                              ))
                          : ""}
                        <p
                          className="text-green-600 border rounded-[10px] text-lg py-2 text-center mt-3"
                          onClick={() => setAddExpenseItems(true)}
                        >
                          Select Expense Items
                        </p>
                      </div>
                      <div className=" bg-slate-100 p-3 text-sm text-center">
                        <p>
                          𝒊 Expense Items will not affect your regular inventory
                          items
                        </p>
                      </div>
                    </Box>
                    <Box className="box-sec">
                      <TextField
                        label="Amount Paid"
                        name="amount_paid"
                        value={sum > 0 ? sum : "-"}
                        id="outlined-basic"
                        variant="outlined"
                        className="w-full"
                        size="small"
                        InputProps={{
                          readOnly: true,
                        }}
                        required
                        onChange={handleChange}
                      />
                    </Box>
                  </Box>
                </div>
              </div>
            </Box>
          </div>
          <div className="add-customer-btn-wrapper1">
            {submitDisabled ? (
              <button
                disabled={submitDisabled}
                className="cursor-not-allowed text-slate-600 bg-slate-200 w-full p-3 rounded-[5px]  transition-all ease-in"
              >
                Add Expense
              </button>
            ) : (
              <button
                onClick={handleClick}
                disabled={submitDisabled}
                className="text-green-600 bg-green-200 w-full p-3 rounded-[5px] hover:text-white hover:bg-green-600 transition-all ease-in"
              >
                Add Expense
              </button>
            )}
          </div>
        </>
      ) : (
        <>
          <div>
            <Box
              sx={{
                width: 500,
              }}
            >
              <div className="flex justify-between p-3 text-center items-center ">
                <div className="flex justify-between flex-row category  ">
                  <button
                    className="back-btn flex gap-1 justify-center text-gray-600 bg-gray-200 w-full p-2 pl-0 rounded-[5px] hover:text-white hover:bg-gray-600 transition-all ease-in"
                    onClick={() => setAddExpenseItems(false)}
                  >
                    <IconChevronLeft />
                    Back
                  </button>
                </div>
                <div>
                  <p>Select Expense Items</p>
                </div>
              </div>
              <div className=" bg-slate-100 p-4 text-sm text-center">
                <p>
                  𝒊 Expense Items will not affect your regular inventory items
                </p>
              </div>

              <div className="add-expense-section-wrapper">
                <div className="section-2">
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "100%" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <Box>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        className=" my-0 z-0"
                        size="small"
                        placeholder="Search for an expense item "
                        onChange={(e) => {
                          setSearchValue(e.target.value);
                        }}
                      />
                    </Box>
                    <Box className="  border rounded-[4px] p-3">
                      <p onClick={() => setNewAddExpenseItems(true)}>
                        Add an expense item
                      </p>

                      {addNewExpenseItems ? (
                        <>
                          <Box className="box-sec ">
                            <TextField
                              label="Enter Name of Expense"
                              //name="enter-category-name"
                              id="outlined-basic"
                              variant="outlined"
                              className="w-full "
                              size="small"
                              onChange={(e) => setExpenseList(e.target.value)}
                              required
                            />
                          </Box>
                          <Box className="box-sec ">
                            <TextField
                              label="Enter Price"
                              //name="enter-category-name"
                              id="outlined-basic"
                              variant="outlined"
                              className="w-full "
                              size="small"
                              onChange={(e) => setPrice(e.target.value)}
                              required
                            />
                          </Box>
                          <div className="w-full flex py-3 pt-5">
                            <div
                              className=" pr-6"
                              onClick={() => {
                                setPrefixValue(temp), setAddPrefix(false);
                              }}
                            >
                              <button
                                onClick={() => {
                                  handleClick3(), setNewAddExpenseItems(false);
                                }}
                                className="text-green-600 bg-green-200 w-full py-3 px-5 rounded-[5px] hover:text-white hover:bg-green-600 transition-all ease-in"
                              >
                                Save
                              </button>
                            </div>
                            <div
                              className=""
                              onClick={() => setNewAddExpenseItems(false)}
                            >
                              <button className="text-red-600 bg-red-200 w-full py-3 px-5 rounded-[5px] hover:text-white hover:bg-red-600 transition-all ease-in">
                                Cancel
                              </button>
                            </div>
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                    </Box>

                    <Box>
                      {result2
                        .filter(
                          (code) => code.expense_name.startsWith(searchValue)
                          // || code.id.startsWith(searchValue)
                        )
                        .map((filteredItem) => (
                          <div key={filteredItem.id} className="category">
                            <div className="gst-card-text cursor-pointer hover:bg-slate-100 p-3 rounded border-b-2 flex flex-row justify-between">
                              <div>
                                <h2 className="pr-4 py-1">
                                  {filteredItem.expense_name}
                                </h2>
                                <div className="flex pb-4  flex-col">
                                  <p className="text-slate-500 text-sm">
                                    PRICE
                                  </p>
                                  <p className="text-slate-800 font-semibold text-lg">
                                    ₹ {filteredItem.price}
                                  </p>
                                </div>
                                <div className="flex gap-4">
                                  <button
                                    onClick={(e) => {
                                      e.preventDefault(),
                                        setEditExpenseItems(true),
                                        setupdatedExpenseItemName(
                                          filteredItem.expense_name
                                        );
                                      setUpdatedExpensePrice(
                                        filteredItem.price
                                      );
                                      setSearchValue(filteredItem.expense_name);
                                    }}
                                    className="text-blue-600 bg-blue-200  py-3 px-5 rounded-[5px] hover:text-white hover:bg-blue-600 transition-all ease-in"
                                  >
                                    Edit
                                  </button>
                                  <button
                                    onClick={(e) => {
                                      e.preventDefault(),
                                        deleteExpenseItemFromList(
                                          filteredItem.id
                                        );
                                    }}
                                    className="text-red-600 bg-red-200  py-3 px-5 rounded-[5px] hover:text-white hover:bg-red-600 transition-all ease-in"
                                  >
                                    Delete
                                  </button>
                                </div>
                              </div>
                              {/* {addBtnActice === false ? ( */}

                              {/* {/* <div>
                                   <button */}
                              {/* onClick={(e) => {
                                      e.preventDefault(), setAddBtnActice(true);
                                    }}
                                    className="add-expense-btn text-blue-600 py-3 px-5 rounded-[5px] hover:text-white hover:bg-blue-600 transition-all ease-in"
                                  >
                                    Add
                                  </button>
                                  
                                </div>
                              ) : ( * */}
                              <div>
                                <span className="border border-blue-600 py-3 ">
                                  <button
                                    onClick={(e) => {
                                      e.preventDefault(),
                                        handleDecrease(filteredItem.id);
                                    }}
                                    className=" text-blue-600   py-3 px-5  hover:text-white hover:bg-blue-600 transition-all ease-in"
                                  >
                                    -
                                  </button>
                                  <span className="   py-3 px-5  hover:text-white  transition-all ease-in">
                                    {filteredItem.qty}
                                  </span>
                                  <button
                                    onClick={(e) => {
                                      e.preventDefault();
                                      handleIncrease(filteredItem.id);
                                    }}
                                    className=" remove-left-border  text-blue-600   py-3 px-5  hover:text-white hover:bg-blue-600 transition-all ease-in"
                                  >
                                    +
                                  </button>
                                </span>
                              </div>
                              {/* )} */}
                            </div>
                            {editExpenseItems ? (
                              <>
                                <Box className="box-sec ">
                                  <TextField
                                    label="Enter Name of Expense"
                                    //name="enter-category-name"
                                    value={updatedExpenseItemName}
                                    id="outlined-basic"
                                    variant="outlined"
                                    className="w-full "
                                    size="small"
                                    onChange={(e) =>
                                      setupdatedExpenseItemName(e.target.value)
                                    }
                                    required
                                  />
                                </Box>
                                <Box className="box-sec ">
                                  <TextField
                                    label="Enter Price"
                                    value={updatedExpensePrice}
                                    //name="enter-category-name"
                                    id="outlined-basic"
                                    variant="outlined"
                                    className="w-full "
                                    size="small"
                                    onChange={(e) =>
                                      setUpdatedExpensePrice(e.target.value)
                                    }
                                    required
                                  />
                                </Box>
                                <div className="w-full flex py-3 pt-5">
                                  <div
                                    className=" pr-6"
                                    onClick={() => {
                                      setPrefixValue(temp), setAddPrefix(false);
                                    }}
                                  >
                                    <button
                                      onClick={(e) => {
                                        e.preventDefault(),
                                          setEditExpenseItems(false);
                                        updateExpenseItemData(filteredItem.id);
                                        setSearchValue("");
                                      }}
                                      className="text-green-600 bg-green-200 w-full py-3 px-5 rounded-[5px] hover:text-white hover:bg-green-600 transition-all ease-in"
                                    >
                                      Update
                                    </button>
                                  </div>
                                  <div
                                    className=""
                                    onClick={() => {
                                      e.preventDefault(),
                                        setEditExpenseItems(false),
                                        setSearchValue("");
                                    }}
                                  >
                                    <button
                                      onClick={(e) => {
                                        e.preventDefault(),
                                          setSearchValue(""),
                                          setEditExpenseItems(false);
                                      }}
                                      className="text-red-600 bg-red-200 w-full py-3 px-5 rounded-[5px] hover:text-white hover:bg-red-600 transition-all ease-in"
                                    >
                                      Cancel
                                    </button>
                                  </div>
                                </div>
                              </>
                            ) : (
                              ""
                            )}
                          </div>
                        ))}
                    </Box>
                  </Box>
                </div>
              </div>
            </Box>
            <div
              onClick={handleContinue}
              className="flex justify-between p-3 px-5"
            >
              <div></div>

              <button
                onClick={() => {
                  setSelectedItems(true), setAddExpenseItems(false);
                }}
                className="text-blue-600 bg-blue-200  py-3 px-5 rounded-[5px] hover:text-white hover:bg-blue-600 transition-all ease-in"
              >
                Continue
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default EditExpenses;
