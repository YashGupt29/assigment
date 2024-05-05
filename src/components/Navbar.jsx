import styled from "styled-components";
// import NumberOfEmployess from "./_NavbarComponents/numberOfEmployess";
import RolesSelect from "./_NavbarComponents/rolesSelect";
import Experience from "./_NavbarComponents/experience";
import Remote from "./_NavbarComponents/remote";
import MinimumBaseSalary from "./_NavbarComponents/minimumBaseSalary";
import Search from "./_NavbarComponents/search";
import useGetJob from "../hooks/useGetJob ";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setJobs } from "../Slice/jobSlice";

const Navbar = () => {
  const Div = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: -1rem;
    @media (max-width: 768px) {
      /* Changed breakpoint to 768px */
      flex-direction: column;
    }
  `;
  const { job } = useGetJob();
  const dispatch = useDispatch();

  // Update the Redux store with the fetched jobs
  useEffect(() => {
    if (job) {
      dispatch(setJobs(job));
    }
  }, [dispatch, job]);
  return (
    <Div>
      <RolesSelect />
      {/* <NumberOfEmployess /> */}
      <Experience />
      <Remote />
      <MinimumBaseSalary />
      <Search />
    </Div>
  );
};

export default Navbar;
