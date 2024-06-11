import "./featured.css";
import useFetch from "../../hooks/useFetch";
import Skeleton from "../skeleton/Skeleton";

function Featured() {
  const { data, loading, error } = useFetch(
    "http://localhost:8800/api/hotels/countByCity?cities=Berlin,Madrid,London"
  );

  return (
    <div className="featured">
      {loading ? (
        <Skeleton type="feature" />
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/600x600/977237.jpg?k=6d894f6f1bc6d83e5206ee19d4e593b008640ec596ed3803071cc03aff856b8b&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Berlin</h1>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAaVBMVEX///8AAAAAAAAAAAAAAAD53Sb53CD52xnr0SfpziDozRuJiYmCgoLoXmZycnLmUFfmTVZra2tmZmblQEnfOkRbW1vcMDrZKzbZKTPfIi5JSUnWIy7fHinVHyrfGydCQkLdEh7dDxs6OjqBIDAcAAAABXRSTlMAESIzRJTdRHwAAAB0SURBVBgZdcExEoJAEADB2bmDwB+Y+P+XSUCkVQYIcj5gl265IBfkgkQJ43GvhLG/CoRM0ZIAwZ44Ia0C8j725Pgg2hJB6C3pIs63ZA6ktUhaR5REkXV5JsuKRJAESCmQYCQEQi+AY/sWtuE4f4VzyCghF/4QPJkx+UkipQAAAABJRU5ErkJggg=="
                alt=""
              />
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/600x600/971353.jpg?k=a5b47d2c38469086427837dfe64ab2e6f57ba52f0504359ef4cc02dc4b9b0737&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Madrid</h1>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAA5FBMVEX///8AAAAAAAAAAAAAAAD//FP/9nD/+FP/9WP/9CP/9RP970T88Dn/8xj/8Sn/8R//8Bn/8BL57Dn46zT37CD26TH15Vr06Cr95xX95hD031vx5CH74CHu1ojW3F3p2ELu1kPl1lDV2F/h0S/oxl7qxEjmxF/3vWPwumHqt0jsrZnrtxjop7Tqqljuo2PuoBTwiY3jkTLugobljTPckhvbjUnPf7fjhi/bg0fud3zscnbackzsZ2zQWxrnSU/NUyjlR0yeWj7lQkjkP0WwUSarPzDhFRzUFx7gEhnSEhjfCBDPChK7G3JaAAAABXRSTlMAESIzRJTdRHwAAACwSURBVBgZrcFBToNQGIXR7/5cQYgto+7CTXTprkYHarSxgqHvvQ5qNQEmJp4D/0aINUXaZ1Y8WPmNpa1MxC1zY2DUBHNNoGinYC7fDEZRyLu7fHjnR4CpJ7Nr+6T2matTMxhZqKs+RosrCxNV6Tedu1wNx4qLHAQBfB2qfjPxKzBMGmu/bNPnMSUuSotxHUmvPNHZfMvG3Bczd9KjicJCCAOZFSZYJYVYKlmINYU/OwNdvzKjDTSengAAAABJRU5ErkJggg==" />
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/600x600/977262.jpg?k=2b852648c76ccaff8be05333057712eda873343dfaa79cd23e55534a1a55aecc&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>London</h1>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAABd1BMVEX///8AAAAAAAAAAAAAAAD////4////+fj2+Pz/9fLx9fnv9vzt8PXt7u776evo7PXo6+//5eX65ebj5fDg4+f73N7b4e741NfU1+j2zND3x8rN0OT2xMjmws30vsP0uL2/wtzstb25vdjyrrPZs8PwqrDJs8mzttTvpayvrs7wnKO7qMPVn7DfnaSjqM2vosOgpcvrkJDvjJObnr/piJOamsPwhIqYmMDngYyPlMLne3vpeYO4hKHueIHQfpPZeouJibSGirrnc3yrgJvYdn+EiLjmcHDob3qae6TLbILkZnLkZWWGeqrjXWpyd615c6JycqXlVmJrc63hV1dtbabgUVFra5/lSVbfSkpgZaNjY51ZYKNbW5boOUTVPkvdPEzjO0ncPDxZWZpRWp7WOTnlMT/aMDDOMD9NTY1CQo7XICBCQoXWGRk6OoM6On/HFxgpNIEeKYIZJH8hIWwYGWsOGHUXF2UREWYREXAPD2wNDGgHBmUGBlziP6OmAAAABXRSTlMAESIzRJTdRHwAAAFFSURBVHjardHbNwJBAMfx3c1oWkUqFaWIlJBa93K/5BJZ0lpsbiVbW0LLZuwfb5ZTL+XBOb4v8zvzeZiHIf4zsm34Pghc90WcBDMZKGkrN7E7SxJUfERPh9dxMBqF2hkeDPUDiqB2hpk+EGBZFsZikGVT40HGAuYwSEuj817gPONgIgG50zEmpDcuSBgq3MX0ImOwCjCZhMLkigcMXXLfIIiib8ADrDCdhg6PpccnisITBiNsxPPNacSQ5+9a4vMaFEotFTQw041KpeY0Y6jJCEVAt99Nl8u0HfjdEYTkGgZZRhvAm91HGiCn4ehm71WWMbxXXCCeXX5RNVA/AiD0sJrTQOjqPT85fFN/QP1MdTpuD44xmLzZtat6XVG0xxWlrhTtYPMaw/bj1vMnQqpqq1ZtqoqXPGOaoghS19EmHfnrD/69L7m1WfG1LUaEAAAAAElFTkSuQmCC" />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Featured;
